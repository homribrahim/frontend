import React ,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import {SiGooglemybusiness} from 'react-icons/si'
import {BiSearchAlt} from "react-icons/bi"
import {RiArrowDropDownLine} from "react-icons/ri"
import Button from './Button'
const Navbar = () => {
const [ShowNav ,setShowNav]=useState(true)
const [Items ,setShowItems]=useState(false)
const [TypesMaison ,setMaison]=useState(false)
const [TypesAppar ,setAppar]=useState(false)
const [Categorie ,setcategorie]=useState("")
const ShowNavbar = () =>{
setShowNav(!ShowNav)
}
const ShowItems = (e) =>{
setShowItems(!Items)
}
const ShowMaison = () =>{
setMaison(!TypesMaison)
}
const ShowAppar = () =>{
setAppar(!TypesAppar)
}
return (
<>
<nav className= "text-blue-4 fixed flex md:flex-row flex-col md:bg-white md:shadow-xl w-full z-20 md:h-auto h-0 cursor-pointer" >
   <div className="text-left flex bg-white py-5  ">
      <SiGooglemybusiness className='mx-3 text-2xl ' />
      <button  onClick={ShowNavbar}  className="text-black  mx-3  rounded md:hidden ml-auto" >
         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18H11M4 6H20H4ZM4 12H20H4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      </button>
   </div>
   <div className={ShowNav ? "  md:m-auto    py-10 md:py-0    flex md:flex-row flex-col  links z-0  " : "    md:m-auto  py-8 md:py-0     flex md:flex-row flex-col links active  "}>
   <NavLink exact to="/" className="px-4 "  activeClassName="coloritem">Acceuil</NavLink>
   <NavLink exact to="/About" className="px-4 "  activeClassName="coloritem">A propos</NavLink>
   <div className="flex  flex-col  ">
      <div className='flex px-4' onClick={ShowItems}>
         <p>Categories</p>
         <RiArrowDropDownLine  className=" text-2xl" />
      </div>
      <div className={Items ? "flex flex-col md:absolute block   bg-white top-16 md:ml-7 ml-4  py-4  rounded-sm shodow-2xl    " : "flex flex-col  md:absolute block   hidden bg-white  "}>
      <div className="flex  flex-col  ">
         <li onClick={ShowMaison} className="px-10 py-1 w-full item "> Maison </li>
         <div className={TypesMaison ? "flex flex-col  block   bg-white top-0 md:ml-7 ml-4   rounded-sm shodow-2xl list-none   " : "flex flex-col  md:absolute block   hidden bg-white  "}>
         <NavLink  to={{
         pathname:"/",
         state:{
         categorie:"Maison",
         type:"S+1",
         st:true
         } }} onClick={ShowItems}  className="px-10 py-1 w-full item " >
         <li name="Maison" value="S+1">- S+1</li>
         </NavLink>
         <NavLink  to={{
         pathname:"/",
         state:{
         categorie:"Maison",
         type:"S+2",
         st:true
         } }} onClick={ShowItems}  className="px-10 py-1 w-full item " >
         <li name="Maison" value="S+2">- S+2</li>
         </NavLink>
         <NavLink  to={{
         pathname:"/",
         state:{
         categorie:"Maison",
         type:"S+3",
         st:true
         } }}  onClick={ShowItems} className="px-10 py-1 w-full item " >
         <li  name="Maison" value="S+3">- S+3</li>
         </NavLink>
      </div>
   </div>
   <div className="flex  flex-col  ">
      <li onClick={ShowAppar} className="px-10 py-1 w-full item " >Appartement</li>
      <div className={TypesAppar ? "flex flex-col  block   bg-white top-0 md:ml-7 ml-4   rounded-sm shodow-2xl list-none   " : "flex flex-col  md:absolute block   hidden bg-white  "}>
      <NavLink  to={{
      pathname:"/",
      state:{
      categorie:"Appartement",
      type:"S+1",
      st:true
      } }}  onClick={ShowItems}  className="px-10 py-1 w-full item " >
      <li name="Appartement" value="S+1">- S+1</li>
      </NavLink>
      <NavLink  to={{
      pathname:"/",
      state:{
      categorie:"Appartement",
      type:"S+2",
      st:true
      } }}  onClick={ShowItems}  className="px-10 py-1 w-full item " >
      <li name="Appartement" value="S+2">- S+2</li>
      </NavLink>
      <NavLink  to={{
      pathname:"/",
      state:{
      categorie:"Appartement",
      type:"S+3",
      st:true
      } }}  onClick={ShowItems}  className="px-10 py-1 w-full item " >
      <li name="Appartement" value="S+3">- S+3</li>
      </NavLink>
   </div>
   </div>
   </div>
   </div>
   <NavLink  to="/Contact" className="px-4 " activeClassName="coloritem">Contact</NavLink>
   </div>
   <span className={ShowNav ?   "text-right flex flex-row  links py-5 lg:mr-10 mr-8 " : "text-right  flex flex-col items-center links active py-5"}>
   <div className="flex">
      <NavLink to="/Annonce"> <Button width="w-56" title="Déposer une annonce" text="text-center" pad="pl-0" /></NavLink>
      <BiSearchAlt className="mx-3 mt-2 text-2xl  " />
   </div>
   <p className="mx-3 mt-3 text-sm font-thin">Beta Version</p>
   </span>
</nav>
</>
)
}
export default Navbar
