import React from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='fixed w-full h-[80px] flex justify-center'>
        <div className='max-w-[1360px] w-[1360px] h-full flex justify-between items-center px-4'>
            <div></div>

            {/* Desktop menu */}
            <div>   
                <ul className='flex-row text-white uppercase font-semibold hidden md:flex md:text-[1rem] lg:text-[1.25rem]'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div className='block text-white cursor-pointer md:hidden'>
                <FaBars size={25} />
            </div>

            {/* Mobile menu */}
            <ul className='hidden'>
                <li>Home</li>
                <li>About Me</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar