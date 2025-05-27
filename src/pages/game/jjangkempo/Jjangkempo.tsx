import React, { useMemo } from 'react'

import * as style from '@pages/game/jjangkempo/jjangkempo.css'

const Jjangkempo = () => {

  const possibleRewards = [1, 2, 4, 7, 2, 4, 1, 2, 7, 4, 2, 25];

  const radius = 145; // 원의 반지름(px)
  const center = 185; // 원의 중심

  const positionedRewards = useMemo(() =>
    possibleRewards.map((item, index) => {
      const angle = (index / possibleRewards.length) * 2 * Math.PI;
      const x = center + radius * Math.cos(angle) - 32; // 32은 item의 반너비
      const y = center + radius * Math.sin(angle) - 32;
      return { item, inlineStyle: { top: `${y}px`, left: `${x}px`} };
    }), [possibleRewards]);

  return (
    <div className={style.jjangkempoWrapper}>
      <div className={style.circleWrapper}>
        {positionedRewards.map(({ item, inlineStyle }, index) => (
          <div key={index} style={inlineStyle}>{item}</div>
        ))}
      </div>
    </div>
  )
}

export default Jjangkempo