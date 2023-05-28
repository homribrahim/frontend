import React from 'react'
import {FaEye} from 'react-icons/fa'
import {SiGooglemaps} from "react-icons/si"
import {NavLink} from 'react-router-dom'


const Card = ({Maison}) => {
    const tableau = 
{
              id:Maison._id,
              titre:Maison.title ,
              ville:Maison.ville,
              type:Maison.type,
              Meuble:Maison.meuble,
              description:Maison.description,
              prix:Maison.prix,
              img1:Maison.imageUrl1,
              img2:Maison.imageUrl2,
              img3:Maison.imageUrl3,
              img4:Maison.imageUrl4,
              img5:Maison.imageUrl5
              
}
   console.log(tableau)
    return (
        <>
           
            <div key={Maison._id} className="md:w-52 w-48 m-3 h-85 bg-white rounded-md  relative shadow-2xl group card overflow-hidden cursor-pointer mb-10">
            <NavLink exact to={{
   pathname:'/annoncement',
   state: {Tab:tableau}  
 }}
  >  <FaEye   className="absolute bg-white hover:bg-gray-200 px-1 h-8 w-8 -right-8 top-32 flex justify-center z-10 shadow-2xl fils" />
        </NavLink>
        <div className="overflow-hidden">
            <img className="w-52 h-44 rounded-t-xl	img_card"  src={Maison.imageUrl1} alt=""/>
        </div>
        <div className="h-1/5 flex flex-col p-3">
            <h1 className="font-semibold text-md p-2">{Maison.title}</h1>
            <div className="flex">
                <SiGooglemaps className="w-10 "/>
                <p className=" text-sm font-thin">{Maison.ville}</p>
            </div>
            <h1 className="font-semibold text-md p-2">{Maison.type}</h1>
            <div className="grid grid-cols-2 justify-items-start ">
            <h1 className="font-black text-md py-2 pl-1">{Maison.meuble ? "Meuble" : "Non Meuble"}</h1>
            <h1 className="font-bold text-blue p-2 ml-8">{Maison.price}Dt</h1>
            </div>

         
        </div>
    </div>
        </>
    )
}

export default Card
