import React from 'react'
import { motion } from "framer-motion"
import NavBar from './NavBar'
import Footer from './Footer'
import Projects from './Projects'
import Bio from './Bio'
import Skills from './Skills'

export default function Home() {
  return (
    <div>
      <NavBar />

      {/* landing page */}
      <div className="flex w-full h-full mt-28">
        <div className=" flex  w-4/6 h-80 ml-20 mr-5 border-2 border-black" id="name">
          <div>
            <p className=" text-6xl font-bold">Hi, I'm Veinal</p>
            <p className=" text-5xl font-bold">Full stack developer</p>
            <p className=' text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas velit accusamus adipisci odit hic esse quaerat quo sunt nostrum?</p>
          </div>
        </div>
        <div className=" flex justify-center w-1/2 h-80 mr-10 ml-5 border-2 border-black" id="photo-div">
          <img src="" alt="svg" />
        </div>
      </div>


      <Bio />

      <Skills />

      <Projects />

      <Footer />
    </div>
  )
}
