import React from 'react'

const Stat = () => {
    return (
        <>
        <div className="stat grid grid-cols-3  justify-items-center py-16 text-white" >
      <div className="flex flex-col items-center font-bold relative top-5"> <h1 className="md:text-5xl text-2xl">+250</h1> <p className="md:text-xl">Utilisateurs</p></div> 
      <div className="flex flex-col items-center font-bold relative bottom-5"> <h1 className="md:text-5xl text-2xl">+40</h1> <p className="md:text-xl">Annonces</p></div> 
      <div className="flex flex-col items-center font-bold relative top-5"> <h1 className="md:text-5xl text-2xl">+375</h1> <p className="md:text-xl">Utilisateurs</p></div> 


        </div>
            
        </>
    )
}

export default Stat
