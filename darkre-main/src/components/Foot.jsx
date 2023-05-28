import React from 'react'
import Button from './Button'
import {BiSearchAlt} from "react-icons/bi"
import {BiEnvelope} from "react-icons/bi"


const Foot = () => {
    return (
        <>
            <div className="bg-white z-30 bottom-0 fixed  w-full md:py-4 py-3 grid md:grid-cols-3 grid-cols-1 justify-items-center">
        
                   <span className="  "> <Button width="w-56" title="Déposer une annonce" text="text-center" pad="pl-0" /></span>
                   <span className="md:flex hidden mt-2 relative right-10 ">    <BiSearchAlt className="ml-3  text-2xl  " /> <p className="font-bold mx-3 text-md ">Rechercher une annonce</p></span>
                   <span className="md:flex hidden  mt-2  relative right-24">    <BiEnvelope className="ml-3  text-2xl " /> <p className="font-bold mx-3 text-md ">Nous Contacter</p></span>

            </div>
        </>
    )
}

export default Foot
