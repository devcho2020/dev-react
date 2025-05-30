import React, { useEffect, useRef, useState } from 'react'
import * as styles from '@pages/game/memory/memoryGame.css'
import { useCoinContext } from '@context/CoinContext'
import { Button } from '@/components/common/Button/Button';
import { memoryGameLevelData } from '@/data/memoryGameLevelData';
import { tsMemotyGame } from '@/types/memoryGame';
import { tsRewardResult } from '@/types/rewardResult';

const MemoryGame = () => {

  const gameCost = 500;
  const { addCoin, paymentCoin } = useCoinContext();

  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [currentReward, setCurrentReward] = useState<number | null>(null);
  const [addRewardAt, setAddRewardAt] = useState(false);

  const [cardList, setCardList] = useState<number[]>([]);
  const [choiceCards, setChoiceCards] = useState<number[]>([]);
  
  const [timerTime, setTimerTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  
  const [playAt, setPlayAt] = useState(false);
  const [possibleChoiceAt, setPossibleChoiceAt] = useState(false);
  const [choiceCompleteCards, setChoiceCompleteCards] = useState<number[]>([]);
  const [cardShowAt, setCardShowAt] = useState(false); // 카드 보여줄지 여부

  const [rewardResults, setRewardResults] = useState<tsRewardResult[]>([]);

  const intervalIdRef = useRef<number | null>(null);
  const endAtRef = useRef(false);
  const nextLevelAtRef = useRef(false);

  // 상태 정리
  // 1 시작전
  // 2 시작
  // 3 카드 셋팅 및 대기시간
  // 4 카드 숨김 및 플레이타임

  // gameSize 카드 셋팅 
  // timerTime 타이머

  const inertCoin = (paymentGameCost: number) => {

    const useCoinAt = paymentCoin(paymentGameCost);
    if(!useCoinAt) return;
    
    startGame(1);
  }

  const createCardList = (gameSize: number) => {
    const numberList = [];
    for(let i = 1; i <= (gameSize * gameSize) / 2; i++) {
        numberList.push(i);
    }
    setCardList(numberList.concat(numberList).sort(() => Math.random() - 0.5));
  }

  const startGame = (nextLevelIndex: number) => {
    const levelInfo: tsMemotyGame = memoryGameLevelData[nextLevelIndex - 1];    

      if(levelInfo != null) {        
        setPossibleChoiceAt(false);
        createCardList(levelInfo.gameSize);
        setChoiceCards([]);
        setChoiceCompleteCards([]);
        setCurrentLevel(nextLevelIndex);
        setPlayAt(true);
        setCardShowAt(true);
        setTimerTime(levelInfo.readyTime);
        setTotalTime(0);        

        setTimeout(() => {
            endAtRef.current = false;
            nextLevelAtRef.current = false;
            setTimerTime(levelInfo.playTime);
            setTotalTime(levelInfo.playTime);
            setCardShowAt(false);        
            setPossibleChoiceAt(true);
        }, (levelInfo.readyTime * 1000))
      } else {        
        endGame();
      }
  }

  const endGame = () => {    
    if(nextLevelAtRef.current || endAtRef.current) return; // 게임 중 다음게임으로 넘어갈 경우 endGame을 타지 않도록

    endAtRef.current = true; 

    if(playAt) {
      const reward = currentReward ?? 0;
      const message = `Lv. ${currentLevel}`;
      const resultMap = {
        message: message,
        gameCost: gameCost,
        reward: reward
      }
      if(reward !== null) {
        
        setAddRewardAt(true);
      }
      setCurrentLevel(null);

      setRewardResults((prev) => [...prev,resultMap])

      setTotalTime(0);
      setTimerTime(0);      
      setPlayAt(false);
      setChoiceCards([]);
      setCardShowAt(true);
      setPossibleChoiceAt(false);
    }
  }

  const choiceUserPick = (choiceIndex: number) => {
    if(playAt && possibleChoiceAt) {
      if(choiceCards.includes(choiceIndex)) return;
      setChoiceCards((prev) => [
        ...prev, choiceIndex
      ])
    }
  } 

  useEffect(() => {
    
    if(!playAt || timerTime <= 0) return;

    intervalIdRef.current = setInterval(() => {
      setTimerTime((prev)=>{
        const result = prev - 1;
        if(result <= 0) {         
          endGame();
        }
        return result < 0 ? 0 : result;
      })

    }, 1000)

    return () => clearInterval(intervalIdRef.current!);

  }, [playAt]);

  useEffect(() => {    
    if(!playAt) return;

    if(choiceCards.length === 2) {
      setPossibleChoiceAt(false);
      const [choiceFirst, choiceSecond] = choiceCards;
      if(cardList[choiceFirst] === cardList[choiceSecond]) {
        setChoiceCompleteCards((prev) => [...prev, choiceFirst, choiceSecond]);  
      } 
      setTimeout(() => {
        setPossibleChoiceAt(true);
        setChoiceCards([]);
      }, 300)
    } else if (choiceCards.length > 2) {
      setChoiceCards([]);
    }
  }, [choiceCards])

  useEffect(() => {

    if(currentLevel === null) return

    if(choiceCompleteCards.length > 0
        && choiceCompleteCards.length === cardList.length) {
          nextLevelAtRef.current = true;
          setTotalTime(0);
          setTimerTime(0);
          const levelInfo: tsMemotyGame = memoryGameLevelData[currentLevel - 1];
          setCurrentReward(levelInfo.reward);
          
          setTimeout(() => {
            startGame(currentLevel + 1);
          }, 1500)
    }
  }, [choiceCompleteCards])

  useEffect(() => {
    if(!addRewardAt) return;

    const reward = currentReward;
    if(reward !== null) {
      addCoin(reward);      
    }    
    setCurrentReward(null);
    setAddRewardAt(false);

  }, [addRewardAt])

  return (
    <div className={styles.memoryGameWrapper}>
      <div className={styles.memoryGameHeader}>
          <div className={styles.memoryGameGraph}>
            <div className={styles.memoryGameGraphTimer}>
              {timerTime}
            </div>
            <div className={styles.memoryGameGraphGaugeWrapper}>
              <div className={styles.memoryGameGraphGauge} style={{width: `${timerTime === 0 ? 100 :timerTime/totalTime * 100}%`}} />
            </div>
          </div>
      </div>
      <div>
        <div className={styles.memoryGameBodyWrapper} style={{gridTemplateColumns: `repeat(${Math.sqrt(cardList.length)}, 1fr)`,}}>
          {cardList.length > 0 && cardList.map((item, index) => {
            if(choiceCompleteCards.includes(index)) {
              return  <div key={index} className={`${styles.memoryGameCard} ${styles.memoryGameCardComplete}`}>{item}</div>
            } else if(choiceCards.includes(index)) {
              return  <div key={index} className={`${styles.memoryGameCard} ${styles.memoryGameCardChoice}`}>{item}</div>
            } else {
              return  <div key={index} className={styles.memoryGameCard} onClick={() =>choiceUserPick(index)}>{cardShowAt || choiceCards.includes(index) ? item : ''}</div>
            }
          })}
        </div>
        <div>
          Lv. {currentLevel} / 적용보상 : {currentReward}
        </div>
      </div>
      <div className={styles.memoryGameFooter}>
        <div>
          <Button onClick={()=> inertCoin(gameCost)} disabled={playAt}>START({gameCost})</Button>
        </div>
        <div className={styles.resultWrapper}>
          <div className={styles.resultHeadRow}>
            <div>No</div>
            <div>비용</div>
            <div>결과</div>
            <div>보상</div>
          </div>
          <div className={styles.resultBodyWrapper}>
            {rewardResults.reverse().map(({message, gameCost, reward}, index) => (
              <div className={styles.resultBodyRow} key={index}>
                <div>{rewardResults.length - index}</div>
                <div>{gameCost}</div>
                <div>{message}</div>
                <div>{reward}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoryGame