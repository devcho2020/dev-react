import React, { useEffect, useMemo, useRef, useState } from 'react'
import useIsSmallScreen from '@hooks/isSmallScreen'
import { useCoinContext } from '@/context/CoinContext'
import { Button } from '@/components/common/Button/Button'

import * as style from '@pages/game/jjangkempo/jjangkempo.css'
import rock from '@images/rock.png'
import scissors from '@images/scissors.png'
import paper from '@images/paper.png'
import { tsRewardResult } from '@/types/rewardResult'


const Jjangkempo = () => {

  // 사용자 코인 관리
  const { userCoin, addCoin, paymentCoin } = useCoinContext();
  const [gameCost, setGameCost] = useState(100);
  
  // 인터벌 관리
  const [intervalIndex, setIntervalIndex] = useState(0);
  const [intervalSpped, setIntervalSpped] = useState(1000);
  const intervalIdRef = useRef<number | null>(null);

  const stopIntervalIdRef = () => {
    if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
  }

  useEffect(() => {
    intervalIdRef.current = setInterval(()=>{
      setIntervalIndex((prev) => {
        return (prev + 1) % 12;
      })      
    }, intervalSpped)

    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [intervalSpped])
  
  // 게임 정보
  const gameImages = [rock, scissors, paper];
  const gameValues = ['바위', '가위', '보'];
  const possibleRewards = [0, 2, 0, 7, 0, 5, 2, 0, 2, 5, 0, 25];
  const [userChoiceIndex, setUserChoiceIndex] = useState<number | null>(null);
  const [resultClass, setResultClass] = useState<string | null>(null);
  const [computerPick, setComputerPick] = useState<number | null>(null);
  const [choiceButtonDisabled, setChoiceButtonDisabled] = useState(true);
  const [startButtonDisabled, setStartButtonDisabled] = useState(false);
  const [rewardResults, setRewardResults] = useState<tsRewardResult[]>([]);


  /** 화면 구성 */
  const isSmall = useIsSmallScreen();

  const radius = isSmall ? 107 : 158; // 원의 반지름(px)
  const center = isSmall ? 141 : 197; // 원의 중심

  const positionedRewards = useMemo(() =>
    possibleRewards.map((item, index) => {
      const angle = (index / possibleRewards.length) * 2 * Math.PI;
      const x = center + radius * Math.cos(angle) - 32; // 32은 item의 반너비
      const y = center + radius * Math.sin(angle) - 32;
      return { item, inlineStyle: { top: `${y}px`, left: `${x}px`} };
  }), [possibleRewards]);


  /** 게임 관련 함수 */

  const insertCoin = (useCoinValue: number) => {
    const useCoinAt = paymentCoin(useCoinValue);

    setStartButtonDisabled(true);
    if (!useCoinAt) {
      setGameCost(100);
      reStartGame();
      return;
    }
    setChoiceButtonDisabled(false);
    setIntervalSpped(200);
  }

  const choiceUserPick = (userPick: number) => {
    setUserChoiceIndex(userPick);
    setChoiceButtonDisabled(true);
    
    // TODO_컴퓨터 결과값 필요
    const computerPick = Math.floor(Math.random() * 3);
    const userValue = gameValues[userPick];
    const computerValue = gameValues[computerPick];
    
    setComputerPick(computerPick);
    setTimeout(() => {
      getResult(userValue, computerValue);
    }, 1500)
  }

  const getResult = (userValue: string, computerValue: string) => {

    let isUserWin = false;
    let resultMsg = '';
    if((userValue === '가위' && computerValue === '보')
      || (userValue === '바위' && computerValue === '가위')
      || (userValue === '보' && computerValue === '바위')) {
        isUserWin = true;
        resultMsg = '이겼다!';
        setIntervalSpped(50);
        setResultClass('win');
    } else if (userValue === computerValue) {
      resultMsg = '비겼다!';
      setResultClass('draw');
      stopIntervalIdRef();
    } else {
      resultMsg = '졌다 ㅜ';
      stopIntervalIdRef();
      setResultClass('lose');
    }

    if(isUserWin) {
      // 5~10초 후 결과 적용
      const rendomTimeOut = (Math.floor(Math.random() * 6) + 5) * 1000;
      setTimeout(() => {
        stopIntervalIdRef();
        const currentIndex = intervalIndex;
        setIntervalIndex(currentIndex);
        const winnerReward = possibleRewards[currentIndex] * gameCost;

        setRewardResults((prev) => [
          ...prev,
          {
            message: resultMsg,
            gameCost: gameCost,
            reward: winnerReward
          }
        ])

        addReward(winnerReward);
      }, rendomTimeOut)
    } else {
      setRewardResults((prev) => [
          ...prev,
          {
            message: resultMsg,
            gameCost: gameCost,
          }
        ])
      setTimeout(() => {reStartGame();}, 3000)
    }
  }

  const addReward = (winnerReward:number) => {
    addCoin(winnerReward);
    setTimeout(() => { reStartGame(); }, 3000);
  }

  const reStartGame = () => {
    setUserChoiceIndex(null);
    setResultClass(null);
    setChoiceButtonDisabled(true);
    setIntervalSpped(1000);
    setComputerPick(null);
    setStartButtonDisabled(false);
  }

  const changeGameCost = (changeValue:number) => {
    setGameCost((prev) => {
      const result = prev + changeValue;
      const prevCoin = userCoin.coin
      if(result <= 100) {
        return 100
      } else {
        return result > prevCoin ? (userCoin.coin < 100 ? 100 : userCoin.coin) : result;
      }

    })
  }
  
  return (
    <div className={style.jjangkempoWrapper}>
      <div className={style.circleWrapper}>
        {positionedRewards.map(({ item, inlineStyle }, index) => (
          <div key={index} className={index === intervalIndex ? 'circle selected' : 'circle'} style={inlineStyle}>
            {item === 0 ? '꽝' : item}
            </div>
        ))}
        <div className={`${style.circleImageWrapper} ${resultClass ?? ''}`}>
          <img className={style.circleImage} src={ computerPick == null ? gameImages[intervalIndex % 3] : gameImages[computerPick]}/>
        </div>
      </div>
      <div>
        <div className={style.choiceWrapper}>
          {gameImages.map((item, index) => (
            <div key={index}>
              <Button className={userChoiceIndex === index ? style.choicePickButton : style.choiceButton} onClick={() => choiceUserPick(index)} disabled={choiceButtonDisabled}>
                <img className={style.choiceButtonImage} src={item} />
              </Button>
            </div>
          ))}
        </div>
        <div className={style.choiceWrapper}>
          <Button onClick={() => changeGameCost(-100)}>
            -
          </Button>
          <Button onClick={() => insertCoin(gameCost)} disabled={startButtonDisabled}>
            START({gameCost})
          </Button>
          <Button onClick={() => changeGameCost(100)}>
            +
          </Button>
        </div>
        <div className={style.resultWrapper}>
          <div className={style.resultHeadRow}>
            <div>No</div>
            <div>비용</div>
            <div>결과</div>
            <div>보상</div>
          </div>
          <div className={style.resultBodyWrapper}>
            {rewardResults.reverse().map(({message, gameCost, reward}, index) => (
              <div className={style.resultBodyRow} key={index}>
                <div>{rewardResults.length - index}</div>
                <div>{gameCost}</div>
                <div>{message}</div>
                <div>{reward === 0 ? '꽝!' : reward}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jjangkempo