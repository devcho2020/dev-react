import { Button } from '@components/common/Button/Button';
import * as style from '@components/layout/Header/header.css';
import logo from '@images/logo.png';
import { Link } from 'react-router-dom';
import { useCoinContext } from '@/context/CoinContext';

const Header = () => {
  const { userCoin, rechargeCoin } =useCoinContext();

  return (
    <>
        <div className={style.logoBox}>
            <Link to={"/"}>
                <img src={logo}/>
            </Link>
        </div>
        <div className={style.title}>
            <p>GAME WORD</p>
        </div>
        <div className={style.statusBox}>
            <div className={style.coinInfoBox}>
                <span>보유 코인 : {userCoin.coin}</span>
            </div>
            <div className={style.chargeBox}>
                <span>충전 횟수 : {userCoin.remainingCharges}</span>
                <Button onClick={rechargeCoin}>충전</Button>
            </div>
        </div>
    </>
  )
}

export default Header