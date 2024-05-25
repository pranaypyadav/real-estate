import React from 'react'

const Header = () => {
    return (
        <>
            <div className=' bg-slate-100 w-full h-8 flex justify-between p-4 items-center '>
                <h3 >Real Estate </h3>
                <input type="text" name="" id="" placeholder='Search....' className=' focus:outline-none bg-slate-100 text-black rounded-lg border-slate-200 border-2 placeholder: text-center text-xl' />

                <ul className=' flex justify-between items-center gap-3'>
                    <li className=' hover:cursor-pointer  hover:text-black text-gray-400  transition-all'>Home</li>
                    <li className=' hover:cursor-pointer  hover:text-black  text-gray-400  transition-all'>About</li>
                    <li className=' hover:cursor-pointer hover:text-black  text-gray-400  transition-all'>SignIn</li>
                </ul>

            </div>
        </>
    )
}

export default Header
