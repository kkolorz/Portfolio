import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-[1200px] mx-auto px-6 flex justify-center items-center w-full h-[60px]'>
        <p>Copyright &copy; {new Date().getFullYear()} Created by Karol Kolorz</p>
    </footer>
  )
}

export default Footer