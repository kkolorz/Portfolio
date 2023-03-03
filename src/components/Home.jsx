import React from 'react'

const Home = () => {
  return (
      <section id="home" className='w-full h-screen'>
        <div className='max-w-[1200px] h-full mx-auto px-6 flex flex-col justify-center items-start md:pl-[200px]'>
            <p className='text-xl sm:text-xl py-1'><span className='text-[#BF91FA]'>Hello there,</span> my name is</p>
            <h1 className='text-4xl sm:text-5xl md:text-6xl py-2 font-semibold'>Karol Kolorz</h1>
            <h2 className='text-4xl sm:text-5xl md:text-[3.5rem] py-3 font-semibold'><span className='text-[#BF91FA]'>I'm </span>Front-End Developer</h2>
            <p className='text-[1.1rem] py-2 max-w-[750px]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ex laborum cupiditate magni incidunt quas adipisci expedita, debitis quo temporibus?</p>
            <p className='text-[1.1rem] py-3'>
                Let's meet!</p>
        <div className='flex gap-4 py-8'>
            <button className='text-[0.9rem] font-semibold rounded-2xl border-[#BF81FA] border-solid border-[3px] py-3 px-4 sm:text-xl hover:scale-[1.06] duration-200'>
                Donwload CV
            </button>
            <button className='text-[0.9rem] font-semibold rounded-2xl py-3 px-6 bg-[#BF91FA] sm:text-xl hover:scale-[1.06] hover:drop-shadow-3xl duration-200'>
                <a href="#contact">Get in touch</a>
            </button>
        </div>
        </div>
    </section>
  )
}

export default Home