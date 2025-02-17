import React from 'react'
import img from './fit.png';

export default function Loader() {
  return (
    <div className='w-full h-screen bg-white/90 flex justify-center items-center'>
       <img 
  src={img} 
  className="w-40 h-40 object-cover rounded-lg animate-bounce" 
  alt="logo" 
/>
    </div>


  )
}
