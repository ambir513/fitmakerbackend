import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'


function Research() {
    const [data, setData] = useState(null)
    const age = useRef()
    const height = useRef()
    const weight = useRef()



    return (
        <div className='mt-48 w-full h-screen flex-col flex-wrap'>
            <form onSubmit={handleSearch} className='flex gap-3 justify-center items-center '>
                <div className="flex flex-col justify-center gap-2 ">
                    <label htmlFor="age" className='ml-2'>age</label>
                    <input type="number" ref={age} id='age' className='mr-3 border-2 w-20 border-black rounded-lg py-1 px-3' placeholder='age' />
                </div>
                <div className="flex flex-col justify-center gap-2 ">
                    <label htmlFor="height" className='ml-2'>height</label>
                    <input type="text" ref={height} id='height' className='mr-3 border-2 w-20 border-black rounded-lg py-1 px-3'
                        placeholder='height'
                    />
                </div>
                <div className="flex flex-col justify-center gap-2 ">
                    <label htmlFor="weight" className='ml-2'>weight</label>
                    <input type="number" ref={weight} id='weight' className='mr-3 border-2 w-20 border-black rounded-lg py-1 px-3'
                        placeholder='weight'
                    />
                </div>
                <button type='submit' className='bg-blue-500 py-1 px-3 mt-8 text-white rounded-lg'>Search</button>
            </form>

        </div>
    )
}

export default Research