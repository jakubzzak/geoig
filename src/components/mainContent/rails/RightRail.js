import React from 'react'
import phoneIcon from '../../../img/icons/phone.svg'
import mailIcon from '../../../img/icons/mail.svg'
import StickyBox from 'react-sticky-box'


const RightRail = () => {

  return (
    <div id="right-rail" className="z-1">
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
  )
}

export default RightRail
