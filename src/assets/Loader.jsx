import React from 'react'
import img from './ff.png';

export default function Loader() {
  return (
    <div className='w-full h-screen bg-white/90 flex justify-center items-center'>
       <img 
  src={img} width={50}
  className=" object-cover rounded-lg animate-bounce" 
  alt="logo" 
/>
    </div>


  )
}
