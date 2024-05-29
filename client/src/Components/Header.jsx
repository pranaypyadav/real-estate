import React from 'react'
import { FaSearch } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Header = () => {
    function handleSearchSubmit(e) {
        e.preventDefault()
    }


    return (
        <header className=' bg-slate-200 shadow-md '>
            <div className='flex justify-between items-center p-2 mx-auto max-w-6xl'>

                <Link to={'/'}><h1 className=' font-bold text-sm sm:text-xl flex flex-wrap  '>
                    <span>Real </span>
                    <span>Estate</span>
                </h1></Link>
                <form onSubmit={handleSearchSubmit} className=' bg-slate-100 p-3 rounded-lg flex items-center justify-between w-24 sm:w-64 '>
                    <input type="text" placeholder='Search...' className=' outline-none bg-transparent ' />
                    <FaSearch className=' text-slate-600'></FaSearch>
                </form>
                <ul className=' flex gap-4 '>
                    <Link to={"/"}><li className=' hidden sm:inline text-slate-700 hover:underline '>Home</li></Link>
                    <Link to={'/about'}>  <li className=' hidden sm:inline text-slate-700 hover:underline'>About</li> </Link>
                    <Link to={"/sign-in"}> <li className='  sm:inline text-slate-700 hover:underline'>Sign In</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
