
import React from 'react'
import Button from './Button'

const Banner = () => {
    return (
        <div className="grid grid-cols-2 justify-items-stretch pt-16 bg-white">
            <div className="py-16">
                <div className="md:w-3/4  md:pl-16 sm:pl-10 pl-3">
<h1 className="md:text-6xl text-3xl font-black md:my-5 my-2">Êtes-vous prêt pour</h1>
<h1 className="md:text-6xl text-3xl font-bold text-blue md:my-5 my-1">Lorem?</h1>
<p className="font-thin md:text-lg text-sm pb-2">Lorem epsum  hfhfk efrum litem ghlm  Ms</p>
<Button width="w-32" title="Commencer" text="text-start" pad="pl-3"/>
</div>
            </div>
            <img src="/images/house_400.jpg" className="py-16" alt="" />

            
        </div>
    )
}

export default Banner
