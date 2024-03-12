import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'
import Projects from './Projects'
import Skills from './Skills'
import Bio from './Bio'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/navbar' element={<NavBar/>} />
                <Route exact path='/footer' element={<Footer/>} />
                <Route exact path='/projects' element={<Projects/>} />
                <Route exact path='/skills' element={<Skills/>} />
                <Route exact path='/bio' element={<Bio/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
