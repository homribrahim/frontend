import React from 'react'

const Sponsors = () => {
    return (
        <>
         <img src="/images/wave.svg" alt="" />
        
         <div className="flex items-center justify-center bg-white">
              <h1 className="coloritem text-blue  md:text-3xl text-2xl font-bold pb-3    ">Notre sponsors</h1>
         </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 justify-items-center bg-white py-10 ">
            <img src="/images/Peak.png" className="w-28 h-28 my-5" alt="" />
            <img src="/images/Hummel.png" className="w-28 h-28 my-5" alt="" />
            <img src="/images/Peak.png" className="w-28 h-28 my-5" alt="" />
            <img src="/images/Hummel.png" className="w-28 h-28 my-5" alt="" />
            <img src="/images/Peak.png" className="w-28 h-28 my-5" alt="" />
            <img src="/images/Hummel.png" className="w-28 h-28 my-5" alt="" />
            <img src="/images/Peak.png" className="w-28 h-28 my-5" alt="" />
            <img src="/images/Hummel.png" className="w-28 h-28 my-5" alt="" />

            </div>
        </>
    )
}

export default Sponsors
