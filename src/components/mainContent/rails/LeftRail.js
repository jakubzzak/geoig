import React, { useEffect, useState } from 'react'
import StickyBox from 'react-sticky-box'
import scrollUpIcon from '../../../img/icons/up-arrow.svg'


const LeftRail = () => {

  const [showScrollUp, setShowScrollUp] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      setShowScrollUp(window.pageYOffset > window.innerHeight)
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleItemClick = (name) => {
    const element = document.getElementById(name)
    if (element !== null || name === "top") {
      window.scrollTo({
        top: name === "top" ? 0:window.pageYOffset + element.getBoundingClientRect().top,
        behavior: 'smooth',
      })
    }
  }

  return (
    <StickyBox className="flex-none h-20 z-1 text-right pr-md" offsetTop={20} offsetBottom={20}
               style={{ border: ' red 1px', width: '200px' }}>
      <div id="side-navbar" className="rounded-lg">
        <div className="flex-col">
          <div className="cursor-pointer hover:text-yellow-500 p-sm rounded-t-lg" onClick={() => handleItemClick("services")}>
            Sluzby
          </div>
          <div className="cursor-pointer hover:text-yellow-500 p-sm" onClick={() => handleItemClick("references")}>
            Referencie
          </div>
          <div className="cursor-pointer hover:text-yellow-500 p-sm" onClick={() => handleItemClick("gallery")}>
            Galeria
          </div>
          <div className="cursor-pointer hover:text-yellow-500 p-sm rounded-b-lg" onClick={() => handleItemClick("footer")}>
            Info
          </div>
          {showScrollUp &&
            <div className="cursor-pointer text-white p-sm pl-lg pr-md rounded-full bg-blue-500"
                 onClick={() => handleItemClick("top")}
                 style={{ position: 'fixed', right: 10, bottom: 10, zIndex: 1000 }}
            >
              scroll up
              <img className="inline animate-bounce" src={scrollUpIcon} alt={'scroll up icon'} width={16}/>
            </div>
          }
        </div>
      </div>
    </StickyBox>
  )
}

export default LeftRail
