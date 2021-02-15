import React from 'react'
import '../styles/MainContent.css'
import References from './mainContent/References'
import Services from './mainContent/Services'
import LeftRail from './mainContent/rails/LeftRail'
import RightRail from './mainContent/rails/RightRail'
import Gallery from './mainContent/Gallery'


const MainContent = () => {

  return (
    <div id="main-content" className="flex">
      <LeftRail/>
      <div className="flex-grow mx-2 z-1">
        <Services/>
        <div id="landing-page"
             className="landing-page-custom bg-in-action bg-no-repeat bg-cover bg-yellow-400 bg-fixed flex flex-wrap content-center justify-start"
             style={{ height: '80vh' }}
        >
          <div className="font-mono text-5xl p-lg border">
            some nice text<br/>
            something very nice
          </div>
        </div>
        <References/>
        <Gallery />
      </div>
      <RightRail/>
    </div>
  )
}

export default MainContent
