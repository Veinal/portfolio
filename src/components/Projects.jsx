import React from 'react'
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <div>
            <section className=" h-3/6 my-10 py-10 border-2 border-black bg-gray-950">
                <h1 className=" text-center text-4xl font-bold text-white mb-10">PROJECTS</h1>
                <div className=" flex-column items-center justify-center mx-20">
                    <div className='flex gap-10 mb-10'>
                        <div className=" w-2/6 h-60 bg-white hover:scale-105">
    
                        </div>
                        <div className=" w-2/6 h-60 bg-white hover:scale-105">
    
                        </div>
                        <div className=" w-2/6 h-60 bg-white hover:scale-105">
    
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <div className=" w-2/6 h-60 bg-white hover:scale-105">
    
                        </div>
                        <div className=" w-2/6 h-60 bg-white hover:scale-105">
    
                        </div>
                        <div className=" w-2/6 h-60 bg-white hover:scale-105">
    
                        </div>
                    </div>
                </div>
                <span className=' flex justify-end mb-10 mr-10'><button className=" bg-white border border-black py-2 px-4 mt-6 rounded-md text-lg">More..</button></span>
            </section>
        </div>
    )
}
