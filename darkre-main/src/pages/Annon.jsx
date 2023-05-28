import React,{useState} from 'react'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
const Annon = () => {
  window.scrollTo(0, 0)
const location=useLocation();

const annonce=location.state.Tab;

    let img1=annonce.img1;
    let img2=annonce.img2;
    let img3=annonce.img3;
    let img4=annonce.img4;
    let img5=annonce.img5;
    
    const [tab,settab]=useState(
    {   "img1":img1,
       "img2":img2,
       "img3":img3,
       "img4":img4,
       "img5":img5
    }
    
    );
    const changeimageRight = () =>{
          let aux=tab.img1;
tab.img1=tab.img2;
tab.img2=tab.img3;
tab.img3=tab.img4;
tab.img4=tab.img5;
tab.img5=aux;
      const tb={
        "img1":tab.img1,
        "img2":tab.img2,
        "img3":tab.img3,
        "img4":tab.img4,
        "img5":tab.img5
      };
      
settab(tb);




    }
    const changeimageLeft = () =>{
        let aux=tab.img5;
tab.img5=tab.img4;
tab.img4=tab.img3;
tab.img3=tab.img2;
tab.img2=tab.img1;
tab.img1=aux;
    const tb={
      "img1":tab.img1,
      "img2":tab.img2,
      "img3":tab.img3,
      "img4":tab.img4,
      "img5":tab.img5
    };
    
settab(tb);




  }
  const changeimage =(e)=>{
    let aux;
   
   
    switch (e.target.name) {
      case "img2": aux=tab.img1;
      tab.img1=e.target.src;
      tab.img2=aux;
      break;
      case "img3":aux=tab.img1;
      tab.img1=e.target.src;
      tab.img3=aux;
      console.log(tab.img1);
      console.log(tab.img3);
      break;
      case "img4":aux=tab.img1;
      tab.img1=e.target.src;
      tab.img4=aux;
      break;
      case "img5":aux=tab.img1;
      tab.img1=e.target.src;
      tab.img5=aux;
        break;
    default:console.log("Error");
      
    }
    const tb={
      "img1":tab.img1,
      "img2":tab.img2,
      "img3":tab.img3,
      "img4":tab.img4,
      "img5":tab.img5
    };

    settab(tb);

  
  }

    
    return (
        <>
       
        <div className="flex flex-col items-center justify-center  sm:mx-36 pt-36  annonce relative">
            <img src={tab.img1}  name="img1" alt="" className="w-auto h-96 rounded-md" />
            <div className="flex ">
            <img src={tab.img3} alt="" onClick={changeimage} name="img3"   className="cursor-pointer sm:w-36 w-28 h-36 m-5  rounded-md" />
            <img src={tab.img2} alt="" onClick={changeimage} name="img2" className=" cursor-pointer sm:w-36 w-28 h-36 m-5  rounded-md "/>
           
            </div>
            <div className="flex ">
            <img src={tab.img4} alt="" onClick={changeimage} name="img4"  className=" cursor-pointer sm:w-36 w-28 h-36 m-5  rounded-md "/>
            <img src={tab.img5} alt="" onClick={changeimage} name="img5"  className="cursor-pointer sm:w-36 w-28 h-36 m-5  rounded-md" />
            </div>

            <div className="cursor-pointer">
              <BsArrowLeftCircleFill  onClick={changeimageLeft} className="text-3xl absolute top-72 lg:left-36 sm:left-5 left-1" />
              <BsArrowRightCircleFill onClick={changeimageRight} className="text-3xl  absolute top-72  lg:right-36 sm:right-5 right-1 " />
           
          
        </div>
        <div className="bg-white rounded-md shadow-md w-72 h-60 my-5">
            <div className="flex px-5 py-2">
            <h1 className="text-blue font-bold pr-2 ">Title:</h1>
            <p className="font-thin">{annonce.titre}</p>
            </div>
            <div className="flex flex-col px-5 py-2">
            <h1 className="text-blue font-bold ">Description:</h1>
            <p className="font-thin">{annonce.description}</p>
            </div>
            <h1 className="text-blue font-bold px-5">{annonce.Meuble ? "Meuble" : "Non Meuble"}</h1>
            <div className="flex px-5 py-2">
            <h1 className="text-blue font-bold pr-5 ">Prix:</h1>
            <p className="font-bold">  {annonce.prix}Dt</p>
            </div>

        </div>      
        
        </div>
        </>
    )
}

export default Annon
