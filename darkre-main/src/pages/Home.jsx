import React,{useState,useEffect} from 'react'
import Banner from '../components/Banner'

import Filter from '../components/Filter'
import Stat from '../components/Stat'
import axios from "axios"



const Home = () => {
    window.scrollTo(0, 0)
    return (
        <div>
         <Banner/>
      <Stat />
     
  <Filter/>
  
        </div>
    )
}

export default Home
