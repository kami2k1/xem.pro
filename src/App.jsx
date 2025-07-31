import React from 'react'
import './App.css'
import Header from './components/Header'
import TelegramButton from './components/TelegramButton'
import HomeTabList from './components/HomeTabList'
import LandingInfo from './components/LandingInfo'
import Background from './components/Background'

function App() {
  return (
    <div className="App">
      <TelegramButton />
      <div className="Landing">
        <div className="Landing-Wrapper">
          <Background />
          <Header />
          <div className="Body">
            <HomeTabList />
            <LandingInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
