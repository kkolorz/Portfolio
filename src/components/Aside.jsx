import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Aside = () => {
  return (
    <div>
        <div className='hidden md:flex flex-col fixed top-[35%] left-0'>
            <ul>
                <li className='w-[170px] h-[80px] flex justify-between text-xl ml-[-100px] hover:ml-[0] duration-300 bg-[#161B22] rounded-r-[10px]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="/">
                        GitHub <BsGithub size={40} className='text-white' />
                    </a>
                </li>
                <li className='w-[170px] h-[80px] flex justify-between text-xl ml-[-100px] hover:ml-[0] duration-300 bg-[#8AB4F8] rounded-r-[10px]'>
                    <a href="/" className='flex justify-between items-center w-full text-white'>
                        Linkedin <FaLinkedinIn size={40} className='text-white' />
                    </a>
                </li>
                {/* <li className='w-[165px] h-[80px] flex justify-between ml-[-100px] hover:ml-[0] duration-300'>
                    <a href="/" className='flex justify-between items-center w-full text-white'>
                        Linkedin <FaLinkedinIn size={40} className='text-white' />
                    </a>
                </li> */}
            </ul>
        </div>
    </div>
  )
}

export default Aside