import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen'>
        <div className='max-w-[1200px] h-full mx-auto px-20 flex flex-col justify-center items-start'>
            <p className='text-[1.6rem] text-[#BF91FA] py-1'>Hello there, my name is <span className='text-white'>Karol Kolorz</span></p>
            <p className='text-white text-[4rem] font-bold py-2'>
                <span className='text-[#BF91FA]'>I'm</span> Front-End Developer</p>
            <p className='text-white text-[1.3rem] py-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ex laborum cupiditate magni incidunt quas adipisci expedita, debitis quo temporibus?</p>
            <p className='text-white text-[1.3rem] py-3'>
                Let's meet!</p>
        <div className='py-9'>

        </div>
        </div>
    </div>
  )
}

export default Home