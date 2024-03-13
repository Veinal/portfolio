import React from 'react'

export default function NavBar() {
    return (
    <div>
        <nav className=" flex justify-around p-4 bg-gray-950 text-white">
            <img src="" alt="logo" className="" />
            <ol className=" flex gap-8">
                <li className="">Home</li>
                <li className="">Bio</li>
                <li className="">Skills</li>
                <li className="">Projects</li>
                <li className="">About me</li>
            </ol>

        </nav>
    </div>
    )
}
