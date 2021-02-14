import React from 'react'
import StickyBox from 'react-sticky-box'
import '../styles/MainContent.css'
import phoneIcon from '../img/icons/phone.svg'
import mailIcon from '../img/icons/mail.svg'
import scrollUpIcon from '../img/icons/up-arrow.svg'
import References from './mainContent/References'
import Services from './mainContent/Services'


const MainContent = () => {

  const handleItemClick = (e, { name }) => {
    const element = document.getElementById(name)
    let offsetPos = name.includes('Jakub') ? 0 : window.pageYOffset
    if (element !== null) {
      const headerOffset = 58
      const elementPos = element.getBoundingClientRect().top
      offsetPos += elementPos - headerOffset
    }
    window.scrollTo({
      top: offsetPos,
      behavior: 'smooth',
    })
  }

  return (
    <div id="main-content" className="flex">
      <StickyBox className="flex-none h-20 z-1 text-right pr-md" offsetTop={20} offsetBottom={20}
                 style={{ border: ' red 1px', width: '200px' }}>
        <div id="side-navbar" className="rounded-lg">
          <div className="flex-col">
            <div className="cursor-pointer hover:text-yellow-500 p-sm rounded-t-lg">
              Sluzby
            </div>
            <div className="cursor-pointer hover:text-yellow-500 p-sm">
              Referencie
            </div>
            <div className="cursor-pointer hover:text-yellow-500 p-sm">
              Galeria
            </div>
            <div className="cursor-pointer hover:text-yellow-500 p-sm rounded-b-lg">
              Info
            </div>
            <div className="cursor-pointer hover:text-yellow-500 p-sm rounded-b-lg">
              scroll up
              <img className="inline" src={scrollUpIcon} alt={'scroll up icon'} width={16}/>
            </div>
          </div>
        </div>
      </StickyBox>
      <div className="flex-grow mx-2 z-1">
        <Services/>
        <References/>
      </div>
      <div id="right-rail">
        <div id="other" className="my-10">
          <a href="https://www.geoig.sk">Ochrana osobných údajov</a><br/>
          <a href="https://www.geoig.sk">Voľné pracovné miesta</a><br/>
          <a href="https://www.geoig.sk">Prihlásenie</a>
        </div>
        <StickyBox className="flex-none h-20" offsetTop={20} offsetBottom={20}
                   style={{ width: '200px' }}>
          <div id="contact" className="p-sm">
            <div>
              <img className="inline mr-2" src={phoneIcon} alt={'phone icon'} width={16}/>
              +421 905 332 653
            </div>
            <div className="mt-2">
              <img className="inline mr-2" src={mailIcon} alt={'mail icon'} width={16}/>
              info@geoig.sk
            </div>
          </div>
        </StickyBox>
      </div>
    </div>
  )
}

export default MainContent
