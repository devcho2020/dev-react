import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Button } from './components/common/Button/Button';
import Header from '@components/layout/Header/Header';
import LeftSide from '@components/layout/LeftSide/LeftSide';
import Footer from '@/components/layout/Footer/Footer';

import * as style from '@styles/app.css';


const App = () => {

  const [isShowMenu, setIsShowMenu] = useState<boolean>(localStorage.isShowMenu ? JSON.parse(localStorage.isShowMenu) : true);

  useEffect(() => {
    localStorage.isShowMenu = isShowMenu;
  }, [isShowMenu])

  return (
    <div className={style.rootWrapper}>
      <header className={style.headerWrapper}><Header /></header>
      <div className={style.bodyWrapper}>
        {isShowMenu && <aside className={style.leftSideWrapper} >
          <LeftSide />
          </aside>}
          <Button className={isShowMenu ? style.leftSideButtonActive : style.leftSideButton} onClick={() => setIsShowMenu((prev:boolean) => !prev)}>{isShowMenu ? '⬅' : '➡'}</Button>
        <main className={style.mainWrapper}>
          
          <Outlet />
        </main>
      </div>
      <footer className={style.footerWrapper}><Footer /></footer>
    </div>
  )
}

export default App