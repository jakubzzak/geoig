import React from 'react'


const Footer = () => {

  return (
    <div id="footer" className="text-center text-white p-sm bg-black">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-right">Názov spoločnosti:</div> <div className="text-left">GEOIG, s.r.o.</div>
          <div className="text-right">Autorizovaný geodet a kartograf:</div> <div className="text-left">Ing. Milan Žák</div>
          <div className="text-right">Adresa:</div> <div className="text-left">Komenského 67, 919 04 Smolenice</div>
          <div className="text-right">IČO:</div> <div className="text-left">44 189 389</div>
          <div className="text-right">DIČ:</div> <div className="text-left">202 262 4560</div>
          <div className="text-right">IČ DPH:</div> <div className="text-left">SK 202 262 4560</div>
          <div className="text-right">Registrový súd:</div> <div className="text-left">Obchodný register Okresného súdu Trnava<br/> Oddiel: Sro, vložka č. 22110/T</div>
        </div>
      </div>
      <div className="pt-md">
        &#169; 2021 GEOIG
      </div>
    </div>
  )
}

export default Footer
