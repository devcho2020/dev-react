import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react'
import { tsCoin } from '@/types/coin'
import dayjs from 'dayjs'

interface CoinProviderProps {
    children: ReactNode;
}

interface CoinContextType {
  userCoin: tsCoin;
  addCoin: (addCoinValue: number) => void;  
  useCoin: (useCoinValue: number) => void;  
  useCharges: () => void;  
}

const CoinContext = createContext<CoinContextType>({
  userCoin: {
    coin : 0,
    remainingCharges: 0,
    updateDt: ''
  },
  addCoin: () => {},
  useCoin: () => {},
  useCharges: () => {},
});

export const CoinProvider = ({ children }:CoinProviderProps) => {

  const defaultCoin = 1000;
  const defaultCharges = 3;

  const [userCoin, setUserCoin] = useState<tsCoin>(() => {
    return localStorage.userCoin ? JSON.parse(localStorage.userCoin) : {
      coin: defaultCoin,
      remainingCharges: defaultCharges,
      updateDt: dayjs().format('YYYY-MM-DD')
    }
  })

  const isProcessingRef = useRef(false);

  const addCoin = (addCoinValue: number) => {
    if (isProcessingRef.current) return false;
    isProcessingRef.current = true;

    const prevCoin = isNaN(userCoin.coin) ? 0 : userCoin.coin;
    const resultValue = prevCoin + addCoinValue;
    setUserCoin((prev) => {      
      return {
        ...prev,
        coin: resultValue
      };
    })

    return true;
  }

  const useCoin = (useCoinValue: number) => {
    if (isProcessingRef.current) return false;
    isProcessingRef.current = true;

    const prevCoin = isNaN(userCoin.coin) ? 0 : userCoin.coin;
    const resultValue = prevCoin - useCoinValue
    if (resultValue < 0) {
      alert('코인 모두 소진');
      isProcessingRef.current =false;
      return false;
    } else {
      setUserCoin((prev) => {
        return {
          ...prev,
          coin: resultValue
        }
      })
    }
    return true;
  }

  const useCharges = () => {
    if (isProcessingRef.current) return false;
    isProcessingRef.current = true;

    if(userCoin.coin > 0) {
      alert('코인을 모두 소진한 후에 다시 시도해 주세요')
      isProcessingRef.current = false;
      return false;
    } else if(userCoin.remainingCharges <= 0) {
      alert('오늘의 충전 횟수를 모두 사용하였습니다.')
      isProcessingRef.current = false;
      return false;
    }

    const prevCharges = isNaN(userCoin.remainingCharges) ? 0 : userCoin.remainingCharges;
    const resultValue = prevCharges - 1;
    setUserCoin((prev) => {
      return {
        ...prev,
        coin: defaultCoin,
        remainingCharges: resultValue
      }
    })

    return true;
  }

  // getStart
  useEffect(() => {

    let needUpdate = false;
    const updated = {...userCoin};

    // check validation
    if (isNaN(updated.coin)) {
      needUpdate = true;
      updated.coin = 0;
    }

    if (isNaN(updated.remainingCharges)) {
      needUpdate = true;
      updated.remainingCharges = 0;
    }

    if (!dayjs(updated.updateDt).isValid()) {
      needUpdate = true;
      updated.updateDt = dayjs().format('YYYY-MM-DD');
    }

    // 일일 초기화
    if (dayjs().isAfter(updated.updateDt, 'D')) {
      needUpdate = true;
      updated.updateDt = dayjs().format('YYYY-MM-DD');

      if (updated.coin <= 0) {
        updated.coin = defaultCoin;
      }

      if (updated.remainingCharges < defaultCharges) {
        updated.remainingCharges = defaultCharges;
      }
    }

    if (needUpdate) {
      setUserCoin(updated);
    }

  }, [])
  
  useEffect(() => {
    localStorage.setItem('userCoin', JSON.stringify(userCoin));
    isProcessingRef.current = false;
  }, [userCoin])
  
  return (
    <CoinContext.Provider value={{ userCoin, addCoin, useCoin, useCharges }}>
        {children}
    </CoinContext.Provider>
  )
}

export const useCoinContext = () => useContext(CoinContext);