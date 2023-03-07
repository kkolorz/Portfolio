import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

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
        navBg ? 'fixed w-full h-[60px] backdrop-blur-xl flex justify-center md:h-[80px] duration-200 z-10' : 'fixed w-full h-[60px] flex justify-center md:h-[80px] duration-200 z-10'
    }>
        <div className='max-w-[1200px] w-[1200px] h-full flex justify-between items-center px-4'>
            <div></div>

            {/* Desktop menu */}
                <div className='flex-row uppercase font-semibold hidden md:flex md:text-[1.1rem] lg:text-[1.25rem]'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="nav-item hover:text-[#BF91FA] hover:scale-[1.04] duration-200">
                    Home
                </Link>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-item hover:text-[#BF91FA] hover:scale-[1.04] duration-200">
                    About Me
                </Link>
                <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className="nav-item hover:text-[#BF91FA] hover:scale-[1.04] duration-200">
                    Experience
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="nav-item hover:text-[#BF91FA] hover:scale-[1.04] duration-200">
                    Projects
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} className="nav-item hover:text-[#BF91FA] hover:scale-[1.04] duration-200">
                    Contact
                </Link>
                </div>

            {/* Hamburger */}
            <div onClick={handleNav} className='block cursor-pointer md:hidden z-10'>
                {!nav ? <FaBars size={25} /> : <FaTimes size={30} />}
            </div>

            {/* Mobile menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#3B455E] flex flex-col justify-center items-center'}>
                <a onClick={handleNav} href='#home' className='py-8 text-4xl font-semibold'>
                    Home
                </a>
                <a onClick={handleNav} href='#about' className='py-8 text-4xl font-semibold'>
                    About Me
                </a>
                <a onClick={handleNav} href='#experience' className='py-8 text-4xl font-semibold'>
                    Experience
                </a>
                <a onClick={handleNav} href='#projects' className='py-8 text-4xl font-semibold'>
                    Projects
                </a>
                <a onClick={handleNav} href='#contact' className='py-8 text-4xl font-semibold'>
                    Contact
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar