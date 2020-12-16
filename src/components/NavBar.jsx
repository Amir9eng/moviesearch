import React from 'react'
import './NavBar.scss'

export default function Navbar() {
    return (
        <div className="flex justify-between bg-blue-900 items-center">
            <div className="flex items-center justify-center awon">
            <h1 className= "text-red-500 text-xl mx-8">Movie Spy</h1>
            <p className="text-white">Movies</p>
            <p className="text-white mx-4">Tv shows</p>
            <p className="text-white mx-4">People</p>
            <p className="text-white mx-4">More</p>
            </div>
            <div className="flex">
                <p className="text-white mx-4">SignIn</p>
                <p className="text-white mx-4">SignUp</p>
            </div>
        </div>
    )
}
