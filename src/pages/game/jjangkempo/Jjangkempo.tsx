import React, { useEffect, useMemo, useRef, useState } from 'react'
import useIsSmallScreen from '@hooks/isSmallScreen'
import { useCoinContext } from '@/context/CoinContext'
import { Button } from '@/components/common/Button/Button'

import * as style from '@pages/game/jjangkempo/jjangkempo.css'
import rock from '@images/rock.png'
import scissors from '@images/scissors.png'
import paper from '@images/paper.png'


const Jjangkempo = () => {

  const { userCoin, addCoin, useCoin, useCharges } = useCoinContext();

  const jjangkempoImages = [rock, scissors, paper];
  
  const [intervalNo, setIntervalNo] = useState(0);
  const [intervalSpped, setIntervalSpped] = useState(1000);
  const intervalIdRef = useRef<number | null>(null);
  
  const possibleRewards = [2, 1, 4, 7, 1, 4, 2, 1, 7, 4, 1, 25];
  const isSmall = useIsSmallScreen();

  const radius = isSmall ? 107 : 162; // 원의 반지름(px)
  const center = isSmall ? 141 : 197; // 원의 중심

  const positionedRewards = useMemo(() =>
    possibleRewards.map((item, index) => {
      const angle = (index / possibleRewards.length) * 2 * Math.PI;
      const x = center + radius * Math.cos(angle) - 32; // 32은 item의 반너비
      const y = center + radius * Math.sin(angle) - 32;
      return { item, inlineStyle: { top: `${y}px`, left: `${x}px`} };
  }), [possibleRewards]);


  const stopIntervalIdRef = () => {
    if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
  }
  
  useEffect(() => {
    intervalIdRef.current = setInterval(()=>{
      setIntervalNo((prev) => {
        return (prev + 1) % 12;
      })
    }, intervalSpped)

    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [intervalSpped])

  return (
    <div className={style.jjangkempoWrapper}>
      <div className={style.circleWrapper}>
        {positionedRewards.map(({ item, inlineStyle }, index) => (
          <div key={index} className={index === intervalNo ? 'circle selected' : 'circle'} style={inlineStyle}>{item}</div>
        ))}
        <div className={style.circleImageWrapper}>
          <img className={style.circleImage} src={jjangkempoImages[intervalNo % 3]}/>
        </div>
      </div>
      <div>
        <div className={style.choiceWrapper}>
          {jjangkempoImages.map((item, index) => (
            <div key={index}>
              <Button className={style.choiceButton}><img src={item}></img></Button>
            </div>
          ))}
        </div>
        <div className={style.choiceWrapper}>
          <Button onClick={()=>setIntervalSpped(200)}>게임하기(100코인)</Button>
        </div>
      </div>
    </div>
  )
}

export default Jjangkempo