import React from 'react'
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <div>
            <section className=" h-3/6 my-10 p-10 border-2 border-black bg-gray-950">
                <h1 className=" text-center text-4xl font-bold text-white mb-10">PROJECTS</h1>
                <div className=" flex items-center justify-center gap-10">
                    <div className=" w-60 h-60 bg-white hover:scale-105">

                    </div>
                    <div className=" w-60 h-60 bg-white hover:scale-105">

                    </div>
                    <div className=" w-60 h-60 bg-white hover:scale-105">

                    </div>
                    <div className=" w-60 h-60 bg-white hover:scale-105">

                    </div>
                    <div className=" w-60 h-60 bg-white hover:scale-105">

                    </div>
                </div>
                <span className=' flex justify-end '><button className=" bg-white border border-black py-2 px-4 mt-6 rounded-md text-lg">More..</button></span>
            </section>
        </div>
    )
}
