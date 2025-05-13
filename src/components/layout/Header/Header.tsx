import React from 'react'
import { Button } from '@components/common/Button/Button';
import * as header from '@components/layout/Header/header.css';
import logo from '@images/logo.png';


const Header = () => {
  return (
    <header className={header.headerWrapper}>
        <div className={header.logoBox}>
            <img src={logo}/>
        </div>
        <div className={header.title}>
            <p>GAME WORD</p>
        </div>
        <div className={header.statusBox}>
            <div className={header.coinInfoBox}>
                <span>보유 코인 : 0</span>
            </div>
            <div className={header.chargeBox}>
                <span>충전 횟수 : 0</span>
                <Button>충전</Button>
            </div>
        </div>
    </header>
  )
}

export default Header