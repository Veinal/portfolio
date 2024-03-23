import React from 'react'

export default function NavBar() {
    return (
    <div>
        <nav className=" flex justify-around p-4 bg-gray-950 text-white">
            <img src="" alt="logo" className="" />
            <ol className=" flex gap-8">
                <li className=""><a>Home</a></li>
                <li className=""><a>Bio</a></li>
                <li className=""><a>Skills</a></li>
                <li className=""><a>Projects</a></li>
                <li className=""><a>About me</a></li>
            </ol>

        </nav>
    </div>
    )
}
