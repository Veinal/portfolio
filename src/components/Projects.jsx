import React from 'react'
import '../cards.css'
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <div>
            <section className=" h-80 my-10 p-10 border-2 border-black bg-gray-950">
                <h1 className=" text-center text-3xl font-bold text-white mb-10">PROJECTS</h1>
                <div class="cards">
                    <div class="card red">
                        <p class="tip">Hover Me</p>
                        <p class="second-text">Lorem Ipsum</p>
                    </div>
                    <div class="card blue">
                        <p class="tip">Hover Me</p>
                        <p class="second-text">Lorem Ipsum</p>
                    </div>
                    <div class="card green">
                        <p class="tip">Hover Me</p>
                        <p class="second-text">Lorem Ipsum</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
