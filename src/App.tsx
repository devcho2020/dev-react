import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import LeftSide from './components/layout/LeftSide'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <Header />
      <div>
        <LeftSide />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App