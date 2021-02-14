import React from 'react'
import './styles/App.css'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import MainContent from './components/MainContent'


const App = () => {

  return (
    <div className="bg-yellow-200">
      <LandingPage/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App
