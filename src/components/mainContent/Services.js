import React, { useState } from 'react'
import dotIcon from '../../img/icons/right-arrow.svg'
import { Image, Dimmer, Header, Icon } from 'semantic-ui-react'


const Services = () => {

  const servicesItems1 = [
    { desc: 'zameranie územia pre projekt(predrealizačné zameranie)' },
    { desc: 'vytýčenie stavieb' },
    { desc: 'kontrolné merania počas výstavby' },
    { desc: 'zameranie skutočného vyhotovenia stavieb' },
    { desc: 'činnosť autorizovaného geodeta a kartografa v zmysle zákona č .215 / 1995 Z.z.' },
  ]

  const servicesItems2 = [
    { desc: 'geometrické plány, adresné body' },
    { desc: 'podklady pre majetkoprávne vysporiadanie pozemkov' },
    { desc: 'vytyčovanie hraníc pozemkov' },
    { desc: 'činnosť autorizovaného geodeta a kartografa v katastri nehnuteľností v zmysle zákona č. 215/1995 Z.z.' }
  ]

  const servicesItems3 = [
    { desc: 'meranie zvislých a vodorovných posunov a deformácií stavebných objektov, strojných a technologických zariadení' },
    { desc: '(budovy, mosty, priehrady, turbokompresory, rotačné pece)' },
    { desc: 'určenie geometrických parametrov žeriavových dráh a žeriavov' },
    { desc: 'určenie geometrických parametrov pozemných a visutých lanových dráh' },
    { desc: 'budovanie vytyčovacích sietí a lokálnych sietí' },
  ]

  const servicesItems4 = [
    { desc: 'program LINIA', link:'https://source.unsplash.com/random' },
    { desc: 'program Regresia pre žeriavove dráhy', link:'' },
    { desc: 'program Profil a zvislé posuny (video)', link:'' },
    { desc: 'program Vodorovné posuny (video)', link:'' },
    { desc: 'program na Spracovanie zápisníka pre DINI12', link:'' },
    { desc: 'program na Redukcie meraných dĺžok do zobrazenia', link:'' },
    { desc: 'program Rovina', link:'' },
    { desc: 'program Dávkový výpočet súradníc', link:'' },
    { desc: 'program Elipsy stredných chýb', link:'' },
    { desc: 'program Kružnica - k meraným bodom vypočíta súradnice stredu kružnice a polomer a', link:'https://source.unsplash.com/random' },
    { desc: 'program VTX-DXF Prevod formátu VTX do DXF pre MStation (video)', link:'https://source.unsplash.com/random' },
  ]

  const [dimmerShow, setDimmerShow] = useState(null);

  return (
    <div id="services" className="p-lg">
      <Dimmer active={dimmerShow != null} onClickOutside={() => setDimmerShow(null)} page>
        {dimmerShow != null && dimmerShow.link &&
          <Header as='h2' icon inverted>
            <Image className="mb-5" src={dimmerShow.link} rounded style={{ maxWidth: '400px', maxHeight: '300px' }} />
            <Header.Subheader>{dimmerShow.desc}</Header.Subheader>
          </Header>
        }
        {dimmerShow != null && !dimmerShow.link &&
        <Header as='h2' icon inverted>
          <Icon name='meh' />
          Broken link
          <Header.Subheader>Sorry broken link, we are working on it!</Header.Subheader>
        </Header>
        }
      </Dimmer>
      <div className="uppercase text-white text-center p-sm rounded-lg bg-red-400"
           style={{ width: '150px', left: '-40px', position: 'relative' }}>
        sluzby
      </div>
      <div className="servicesItems1">
        <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
             style={{ width: '300px', position: 'relative', bottom: '-40px', left: '20px' }}>
          Geodetické práce v investičnej výstavbe
        </div>
        <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
          {servicesItems1.map(item => {
            return (
              <div key={item.desc}>
                <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                {item.desc}
              </div>
            )
          })}
        </div>
      </div>
      <div className="servicesItems2">
        <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
             style={{ width: '300px', position: 'relative', bottom: '-40px', left: '20px' }}>
          Geodetické práce v katastri nehnuteľností
        </div>
        <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
          {servicesItems2.map(item => {
            return (
              <div key={item.desc}>
                <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                {item.desc}
              </div>
            )
          })}
        </div>
      </div>
      <div className="servicesItems3">
        <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
             style={{ width: '300px', position: 'relative', bottom: '-40px', left: '20px' }}>
          Špeciálne geodetické práce
        </div>
        <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
          {servicesItems3.map(item => {
            return (
              <div key={item.desc}>
                <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                {item.desc}
              </div>
            )
          })}
        </div>
      </div>
      <div className="servicesItems4">
        <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
             style={{ width: '300px', position: 'relative', bottom: '-40px', left: '20px' }}>
          Vývoj geodetického softvéru na objednávku
        </div>
        <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
          {servicesItems4.map(item => {
            return (
              <div key={item.desc} onClick={() => item.link ? setDimmerShow(item):{}} className={item.link ? "text-red-500 cursor-pointer":""}>
                <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                {item.desc}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
