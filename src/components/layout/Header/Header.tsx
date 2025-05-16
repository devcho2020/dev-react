import { Button } from '@components/common/Button/Button';
import * as style from '@components/layout/Header/header.css';
import logo from '@images/logo.png';

const Header = () => {
  return (
    <>
        <div className={style.logoBox}>
            <img src={logo}/>
        </div>
        <div className={style.title}>
            <p>GAME WORD</p>
        </div>
        <div className={style.statusBox}>
            <div className={style.coinInfoBox}>
                <span>보유 코인 : 0</span>
            </div>
            <div className={style.chargeBox}>
                <span>충전 횟수 : 0</span>
                <Button>충전</Button>
            </div>
        </div>
    </>
  )
}

export default Header