import React from 'react'
import { Link } from 'react-router-dom'
import {SiGooglemybusiness} from 'react-icons/si'
import {BiEnvelope} from "react-icons/bi"
import {BiPhoneCall} from "react-icons/bi"

const Footer = () => {
    return (
        <>
        <footer className=" z-20  relative">
     <div className="w-full flex justify-center">  <SiGooglemybusiness className='my-5 mb-16 text-4xl text-white' /></div> 


            <div className="grid md:grid-cols-2 grid-cols-1 bg-transparent text-white  justify-items-center">
                <div className="my-2">
                    <h1 className="uppercase text-2xl font-medium ">Contact Us</h1>
                   <div className="flex my-5  ">
                       <BiEnvelope className='mr-3 text-2xl text-white' />
                       <p>info@example.com</p>
                   </div>
                   <div className="flex  my-5 ">
                       <BiPhoneCall className='mr-3  text-2xl text-white' />
                       <p>06.23.77.82.32</p>
                   </div>
                </div>
                <div  className="my-2">
                    <h1 className="uppercase text-2xl ">Navigate</h1>
                   <div className="flex flex-col my-5 ">
                   <Link to="" className="py-1   " >Acceuil</Link>
                     <Link  to="/Categories" className="py-1">Categories</Link>
                 <Link  to="/About" className="py-1 " >A Propos</Link>
                    <Link  to="/Contact" className="py-1">Contact</Link>
                   </div>
                </div>

            </div>
            <div className="bg-black">
                <h1 className='text-center md:text-2xl text-sm text-white font-light py-5'>Copyright © Karya 2021, All rights reserved</h1>
            </div>
            <div className="bg-white ">
                <h1 className='text-center md:text-2xl text-sm text-black py-5'>Copyright © Karya 2021, All rights reserved</h1>
            </div>
           
        </footer>
            
        </>
    )
}

export default Footer
