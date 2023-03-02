import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <nav className='fixed w-full h-[80px] flex justify-center'>
        <div className='max-w-[1200px] w-[1200px] h-full flex justify-between items-center px-4'>
            <div></div>

            {/* Desktop menu */}
                <ul className='flex-row text-white uppercase font-semibold hidden md:flex md:text-[1.1rem] lg:text-[1.25rem]'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>

            {/* Hamburger */}
            <div onClick={handleNav} className='block text-white cursor-pointer md:hidden z-10'>
                {!nav ? <FaBars size={25} /> : <FaTimes size={30} />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#3B455E] flex flex-col justify-center items-center'}>
                <li className='py-8 text-4xl font-semibold text-white'>Home</li>
                <li className='py-8 text-4xl font-semibold text-white'>About Me</li>
                <li className='py-8 text-4xl font-semibold text-white'>Experience</li>
                <li className='py-8 text-4xl font-semibold text-white'>Projects</li>
                <li className='py-8 text-4xl font-semibold text-white'>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar