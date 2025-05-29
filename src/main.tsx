import { StrictMode, JSX } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { CoinProvider } from './context/CoinContext.tsx';

import App from './App.tsx'

import Home from '@pages/Home.tsx';
import Free from '@/pages/board/free/Free.tsx';

import { menuItem } from './data/menuData.ts';

import '@styles/global.css.ts'
import Jjangkempo from '@pages/game/jjangkempo/Jjangkempo.tsx';
import MemoryGame from './pages/game/memory/MemoryGame.tsx';

const routesMap: { [key: string]: JSX.Element } = {
  '/' : <Home />,
  '/board/free' : <Free />,
  '/game/jjangkempo' : <Jjangkempo />,
  '/game/memory-game' : <MemoryGame />,
}

const childRoutes: RouteObject[] = [{index: true, element: <Home />}];

menuItem.forEach((item) => {
  if(item.path && item.path !== '/') {
    childRoutes.push({
      path: item.path,
      element: routesMap[item.path] || <Home />
    })
  }

  if(item.subMenuItems && item.subMenuItems.length > 0) {    
    item.subMenuItems.forEach((subItem) => {
      if(subItem.path) {
        childRoutes.push({
          path: (item.subPath ?? '') + subItem.path,
          element: routesMap[(item.subPath ?? '') + subItem.path] || <Home />
        })
      }
    })
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: childRoutes
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoinProvider>
      <RouterProvider router={router} />
    </CoinProvider>
  </StrictMode>,
)
