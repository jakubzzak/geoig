import React, { useState } from 'react'
import dotIcon from '../../img/icons/right-arrow.svg'


const References = () => {

  const [showOlder, setShowOlder] = useState(false)

  const items2015 = [
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Starina, (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Zemplínska Šírava, (subd. LIPG, s.r.o.)' },
    { desc: 'Dokumentácia skutočného vyhotovenia a geometrický plán Admin. budovy LS Pezinok' },
    { desc: 'Etapové meranie zvislých posunov objektu MSVP JAVYS, a.s.' },
    { desc: 'Dokumentácia skutočného vyhotovenia a geometrický plán Admin. budovy LS Pezinok' },
    { desc: 'Etapové meranie zvislých posunov vodných prečerpávacích staníc ČS Boľ, ČS Čičarovce, ČS Ptrukša, (subd. LIPG, s.r.o.)' },
    { desc: 'Meranie zvislých a vodorovných posunov diaľničných mostných objektov D1-178.1, D1-178.2, D1-178.6, (subd. LIPG, s.r.o.)' },
    { desc: 'Určenie geometrických parametrov lanovej dráhy typ Doppelmayr 4-CLF, Oravská Lesná' },
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy 32t, SO 808/1-01, Spracovateľské centrum Mochovce' },
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy 5t, SO 49/HP, JESS, a.s.' },
    { desc: 'Vytyčovacie práce na stavbe Integrálneho skladu RAO v lokalite JAVYS V-1' },
    { desc: 'Ďalšie dokumentácie skutočného vyhotovenia, geometrické plány a vytyčovacie práce' },
  ]

  const items2014 = [
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Bukovec, (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Domaša, (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Zemplínska Šírava, (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov objektu MSVP JAVYS, a.s.' },
    { desc: 'Projekt merania posunov mostného objektu č. 207-00 na stavbe D1 HP-LL počas výstavby, (subd. LIPG, s.r.o.)' },
    { desc: 'Projekt merania posunov mostného objektu č. 201-10 na stavbe diaľnice D1 počas výstavby, (subd. LIPG, s.r.o.)' },
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy 125t, SO 490-V1' },
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy 5t, SO 640-V1' },
    { desc: 'Určenie zvislých posunov severozápadných hradieb Bratislavského hradu' },
    { desc: 'Ďalšie dokumentácie skutočného vyhotovenia, geometrické plány a vytyčovacie práce' },
  ]
  const items2013 = [
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Bukovec (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Domaša (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Zemplínska Šírava (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie vodorovných a zvislých posunov objektu Zemná hrádza – odkalisko Čifáre, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor TG 32, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu MSVP JAVYS, a.s.' },
    { desc: 'Určenie rovinnosti a náklonu HDR tlakovej nádoby reaktora III. a IV. bloku, SE, a.s.' },
    { desc: 'Určenie náklonu hlavnej deliacej roviny HCČ tlakovej nádoby reaktora III a IV. bloku, EBO, SE, a.s.' },
    { desc: 'Určenie výškových a smerových parametrov koľajníc zavážacieho stroja, SE, a.s.' },
    { desc: 'Určenie rovinnosti príruby ochranného príklopu jadrového reaktora, Škoda Slovakia, a.s.' },
    { desc: 'Určenie priamosti vložených tyčí BOR, SE, a.s.' },
    { desc: 'Dokumentácia skutočného vyhotovenia káblovej prípojky, Electrik, s.r.o.' },
  ]
  const items2012 = [
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Bukovec (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Domaša (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Zemplínska Šírava (subdod. LIPG, s.r.o.' },
    { desc: 'Etapové meranie vodorovných a zvislých posunov objektu Zemná hrádza – odkalisko Čifáre, EMO SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 32, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Dieselgenerátorová stanica, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 11, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 12, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy, SO 640, EBO SE, a.s.' },
    { desc: 'Vytýčenie trasy tepelného napájača, SE, a.s.' },
    { desc: 'Určenie rovinnosti a náklonu HDR tlakovej nádoby reaktora III. a IV. bloku, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Určenie náklonu hlavnej deliacej roviny HCČ tlakovej nádoby reaktora III a IV. bloku, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Chladiace veže, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Aktualizácia Základnej mapy závodu, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Kontrolné meranie rovinnosti dna XL žľabov vákuobarbotážneho systému, Atómové elektrárne Bohunice, SE, a.s.' },
  ]
  const items2011 = [
    { desc: 'Základná meranie zvislých posunov TG31 pred montážou technológie, závod MO34' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Hať Huncovce (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Polder Beša (subd. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Zemplínska Šírava (subdod. LIPG, s.r.o.)' },
    { desc: 'Základná meranie zvislých posunov TG32 pred montážou technológie, závod MO34' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Hať Petrovce (subd. LIPG, s.r.o.)' },
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy 35t, SO 800, EBO SE, a.s.' },
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy 50t, CČS, EBO SE, a.s.' },
    { desc: 'Geometrický plán na vyznačenie vecného bremena, SE, a.s.' },
    { desc: 'Etapové meranie vodorovných a zvislých posunov objektu Zemná hrádza – odkalisko Čifáre, EMO SE, a.s.' },
    { desc: 'Vytýčenie trasy tepelného napájača, SE, a.s.' },
    { desc: 'Určenie rovinnosti a náklonu HDR tlakovej nádoby reaktora III. a IV. bloku, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Určenie náklonu hlavnej deliacej roviny HCČ tlakovej nádoby reaktora III a IV. bloku, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Vytýčenie relatívnej výšky v miestnosti A201 objekt č. 800/1-01 EMO.' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Čerpacia stanica Boľ, Čičarovce' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Čerpacia stanica Kamenná Moľva' },
  ]
  const items2010 = [
    { desc: 'Dokumentácia skutočného vyhotovenia stavebného objektu, Pekáreň školuda Trstín' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Zemplínska Šírava (subdod. LIPG, s.r.o.)' },
    { desc: 'Etapové meranie zvislých posunov vodnej stavby Hať Petrovce (subdod. LIPG, s.r.o.)' },
    { desc: 'Projekt merania posunov mostných objektov stavby D1 Sverepec – Vrtižer, (subdod. LIPG, s.r.o.)' },
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy, SO 490, EBO SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 31, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Etapové meranie vodorovných a zvislých posunov objektu Zemná hrádza – odkalisko Čifáre, EMO SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 32, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Dieselgenerátorová stanica, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 11, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 12, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Vytýčenie trasy tepelného napájača, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Chladiace veže, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Určenie náklonu hlavnej deliacej roviny HCČ tlakovej nádoby reaktora II. bloku, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Určenie rovinnosti a náklonu HDR tlakovej nádoby reaktora II. bloku, Atómové elektrárne Mochovce, SE, a.s.' },
  ]
  const items2009 = [
    { desc: 'Kontrolné meranie geometrických parametrov žeriavovej dráhy f. de ADDA, s.r.o.  Bratislava' },
    { desc: 'Určenie rovinnosti príruby ochranného príklopu a protipríruby šachty reaktora na 2. bloku EMO' },
    { desc: 'Geometrický plán na zameranie rozostavanej stavby, Energomont s.r.o.  Trnave' },
    { desc: 'Etapové meranie zvislých posunov objektu Chladiace veže, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Dieselgenerátorová stanica, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Kompresorova stanica, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Strojovňa I. a II. bloku, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 11, 12, 21, 22, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie vodorovných a zvislých posunov objektu Zemná hrádza – odkalisko Čifáre, AE Mochovce, SE, a.s.' },
    { desc: 'Určenie rovinnosti a náklonu HDR tlakovej nádoby reaktora II. bloku, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Určenie náklonu hlavnej deliacej roviny HCČ tlakovej nádoby reaktora II. bloku, Atómové elektrárne Mochovce, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Chladiace veže, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Strojovňa III. a IV. bloku, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Trurbogenerátor 31, 32, 41, 42, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Etapové meranie zvislých posunov objektu Centrálna čerpacia stanica, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Určenie rovinnosti a náklonu HDR tlakovej nádoby reaktora III. a IV. bloku, Atómové elektrárne Bohunice, SE, a.s.' },
    { desc: 'Určenie náklonu hlavnej deliacej roviny HCČ tlakovej nádoby reaktora III a IV. bloku, AE Bohunice, SE, a.s.' },
    { desc: 'Vytýčenie vlastníckej hranice pre Komplex objektov Energomont v Trnave' },
    { desc: 'Dokumentácia skutočného vyhotovenia stavebného objektu, Komplex objektov Energomont v Trnave' },
  ]

  return (
    <div id="references" className="p-lg">
      <div className="uppercase text-white text-center p-sm rounded-lg bg-red-400"
           style={{ width: '150px', left: '-40px', position: 'relative' }}>referencie
      </div>
      <div className="ref2015">
        <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
             style={{ width: '100px', position: 'relative', bottom: '-40px', left: '20px' }}>
          2015
        </div>
        <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
          {items2015.map(item => {
            return (
              <div key={item.desc}>
                <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                {item.desc}
              </div>
            )
          })}
        </div>
      </div>
      <div className="ref2014">
        <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
             style={{ width: '100px', position: 'relative', bottom: '-40px', left: '20px' }}>
          2014
        </div>
        <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
          {items2014.map(item => {
            return (
              <div key={item.desc}>
                <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                {item.desc}
              </div>
            )
          })}
        </div>
      </div>
      {showOlder &&
      <div>
        <div className="ref2013">
          <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
               style={{ width: '100px', position: 'relative', bottom: '-40px', left: '20px' }}>
            2013
          </div>
          <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
            {items2013.map(item => {
              return (
                <div key={item.desc}>
                  <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                  {item.desc}
                </div>
              )
            })}
          </div>
        </div>
        <div className="ref2012">
          <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
               style={{ width: '100px', position: 'relative', bottom: '-40px', left: '20px' }}>
            2012
          </div>
          <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
            {items2012.map(item => {
              return (
                <div key={item.desc}>
                  <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                  {item.desc}
                </div>
              )
            })}
          </div>
        </div>
        <div className="ref2011">
          <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
               style={{ width: '100px', position: 'relative', bottom: '-40px', left: '20px' }}>
            2011
          </div>
          <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
            {items2011.map(item => {
              return (
                <div key={item.desc}>
                  <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                  {item.desc}
                </div>
              )
            })}
          </div>
        </div>
        <div className="ref2010">
          <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
               style={{ width: '100px', position: 'relative', bottom: '-40px', left: '20px' }}>
            2010
          </div>
          <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
            {items2010.map(item => {
              return (
                <div key={item.desc}>
                  <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                  {item.desc}
                </div>
              )
            })}
          </div>
        </div>
        <div className="ref2009">
          <div className="text-white text-center p-sm rounded-lg bg-blue-200 z-1"
               style={{ width: '100px', position: 'relative', bottom: '-40px', left: '20px' }}>
            2009
          </div>
          <div className="border-2 rounded-lg border-black p-lg pb-md mt-5">
            {items2009.map(item => {
              return (
                <div key={item.desc}>
                  <img className="inline mr-2" src={dotIcon} alt={'dot icon'} width={12}/>
                  {item.desc}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      }
      <div className="cursor-pointer p-sm text-yellow-400" onClick={() => setShowOlder(!showOlder)}>{showOlder ? "skry staršie":"ukáž staršie.."}</div>
    </div>
  )
}


export default References
