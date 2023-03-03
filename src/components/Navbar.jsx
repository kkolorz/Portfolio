import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [navBg, setNavBg] = useState(false)

    const handleNav = () => setNav(!nav)


    const changeBg = () => {
        if(window.scrollY >= 170) {
            setNavBg(true)
        } else {
            setNavBg(false)
        }
    }

    window.addEventListener('scroll', changeBg)


  return (
    <nav className={
        navBg ? 'fixed w-full h-[60px] backdrop-blur-xl flex justify-center md:h-[80px] duration-200' : 'fixed w-full h-[60px] flex justify-center md:h-[80px] duration-200'
    }>
        <div className='max-w-[1200px] w-[1200px] h-full flex justify-between items-center px-4'>
            <div></div>

            {/* Desktop menu */}
                <div className='flex-row uppercase font-semibold hidden md:flex md:text-[1.1rem] lg:text-[1.25rem]'>
                    <a href=''>
                        Home
                    </a>
                    <a href=''>
                        About Me
                    </a>
                    <a href=''>
                        Experience
                    </a>
                    <a href=''>
                        Projects
                    </a>
                    <a href=''>
                        Contact
                    </a>
                </div>

            {/* Hamburger */}
            <div onClick={handleNav} className='block cursor-pointer md:hidden z-10'>
                {!nav ? <FaBars size={25} /> : <FaTimes size={30} />}
            </div>

            {/* Mobile menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#3B455E] flex flex-col justify-center items-center'}>
                <a href='' className='py-8 text-4xl font-semibold'>
                    Home
                </a>
                <a href='' className='py-8 text-4xl font-semibold'>
                    About Me
                </a>
                <a href='' className='py-8 text-4xl font-semibold'>
                    Experience
                </a>
                <a href='' className='py-8 text-4xl font-semibold'>
                    Projects
                </a>
                <a href='' className='py-8 text-4xl font-semibold'>
                    Contact
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar