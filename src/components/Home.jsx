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
        <div className=" w-1/2 h-80 ml-10 mr-5 border-2 border-black" id="name">
          <p className=" ml-5">This is Veinal</p>
          <p className="">Full stack developer</p>
        </div>
        <div className="w-1/2 h-80 mr-10 ml-5 border-2 border-black" id="photo-div">
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
