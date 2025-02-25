import React, { useState } from 'react'
import { Toaster } from 'sonner'

function Aifilter() {
    const [age, setAge] = useState(14)
    const [weight, setWeight] = useState(35)
    const [height, setHeight] = useState(4)
    const [isChange, setIsChange] = useState(true)
    const [data, setData] = useState(null)
    const [display, setDisplay] = useState(true)
    const token = localStorage.getItem("token")

    function handleAgeIncre() {
        if (age === 60) return
        setAge((prev) => prev + 1)
        setIsChange(false)

    }

    function handleAgeIndecre() {
        if (age === 14) return
        setAge((prev) => prev - 1)
    }

    const handleWeigthIncre = () => {
        if (weight === 120) return
        setWeight((prev) => prev + 1)
    }
    const handleWeigthdecre = () => {
        if (weight === 35) return
        setWeight((prev) => prev - 1)
    }

    const handleHeightIncre = () => {
        setHeight((prev) => {
            const newHeight = Math.min(7.0, (parseFloat(prev) + 0.1));
            return parseFloat(newHeight.toFixed(1));
        });
    };

    const handleHeightdecre = () => {
        setHeight((prev) => {
            const newHeight = Math.max(4.0, (parseFloat(prev) - 0.1));
            return parseFloat(newHeight.toFixed(1));
        });
    };
    async function handlefilter(e) {
        e.preventDefault();

    }
    return (
        <div className='mt-20 w-full h-screen flex flex-wrap justify-center items-center'>
            <Toaster position="top-right" style={{ marginTop: "60px" }} />
            <div className={`${display ? "h-screen" : "h-fit"} flex md:p-20 sm:p-10 p-7 gap-10 justify-center items-center`}>
                <form className="flex flex-col gap-3" onSubmit={handlefilter}>
                    <div className=" flex flex-col justify-center items-center">
                        <div className="md:flex-row flex sm:flex-col lg:flex-row flex-col md:gap-5 gap-5  justify-center w-full">
                            <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                                <label>age: {age}</label>
                                <div className="flex gap-4">
                                    <div className='py-1 px-3 bg-indigo-600 cursor-pointer text-white rounded-lg' onClick={handleAgeIncre}>+</div>
                                    <input type="range" className='cursor-pointer' value={age} max={60} min={14} onChange={(e) => setAge(Number(e.target.value))} />
                                    <div className='py-1 px-3 bg-red-600 cursor-pointer text-white rounded-lg' onClick={handleAgeIndecre}>-</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                                <label>Weight: {weight}</label>
                                <div className="flex gap-4">
                                    <div className='py-1 px-3 bg-indigo-600 cursor-pointer text-white rounded-lg' onClick={handleWeigthIncre}>+</div>
                                    <input type="range" className='cursor-pointer' value={weight} max={120} min={14} onChange={(e) => setWeight(Number(e.target.value))} />
                                    <div className='py-1 px-3 bg-red-600 cursor-pointer text-white rounded-lg' onClick={handleWeigthdecre}>-</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] border-2 border-black/20 text-black p-4 rounded-lg">
                                <label>Height: {height} ft</label>
                                <div className="flex gap-4">
                                    <div className='py-1 px-3 bg-indigo-600 cursor-pointer text-white rounded-lg' onClick={handleHeightIncre}>+</div>
                                    <input type="range" className='cursor-pointer' value={height} max={7} min={4} step={0.1} onChange={(e) => setHeight(Number(e.target.value))} />
                                    <div className='py-1 px-3 bg-red-600 text-white rounded-lg cursor-pointer' onClick={handleHeightdecre}>-</div>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='bg-blue-500 w-20 py-1 px-3 mt-8  text-white rounded-lg'>search</button>
                    </div>
                    {data == null ? <div class="relative flex w-full animate-pulse gap-2 ">
                        <div class="md:h-[380px] sm:h-[200px] h-[300px] lg:w-[800px] md:w-[700px] sm:w-[500px] w-[300px] rounded-lg bg-slate-400">
                        </div>
                    </div> : (<><h1>hii</h1></>)
                    }
                </form>
            </div>
        </div>
    )
}

export default Aifilter 