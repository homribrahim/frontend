import React from 'react'

const Button = ({title,width,text,pad}) => {
    return (
        <div className={`bg-blue py-2 rounded-2xl cursor-pointer ${width}`}>
            <p className={` ${text} text-white md:text-lg text-sm ${pad}  `}>{title}</p>
            </div> 
    )
}

export default Button
