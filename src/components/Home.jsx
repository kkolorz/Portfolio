import { Link } from 'react-scroll';
import { motion as m } from 'framer-motion';

const Home = () => {
  return (
      <section id="home" className='w-full h-screen'>
        <div className='max-w-[1200px] h-full mx-auto px-6 flex flex-col justify-center items-start md:pl-[200px]'>
            <m.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0 }}
                variants= {{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
                className='text-xl py-1'><span className='text-[#BF91FA]'>Hello there,</span> my name is
            </m.p>
            <m.h1 
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants= {{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 }
                }}
                className='text-4xl sm:text-5xl md:text-6xl py-2 font-semibold'>Karol Kolorz</m.h1>
            <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                    variants= {{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <h2 className='text-4xl sm:text-5xl md:text-[3.5rem] py-3 font-semibold'><span className='text-[#BF91FA]'>I'm </span>Front-End Developer</h2>
                <p className='text-[1.1rem] py-2 max-w-[750px]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ex laborum cupiditate magni incidunt quas adipisci expedita, debitis quo temporibus?</p>
                <p className='text-[1.1rem] py-3'>
                    Let's meet!</p>
            </m.div>
            <div className='flex gap-4 py-8'>
                <m.button 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                        variants= {{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}                                   
                    className='text-[0.9rem] font-semibold rounded-2xl border-[#BF81FA] border-solid border-[3px] py-3 px-4 sm:text-xl 
                    hover:!scale-[1.06] duration-200'>
                        Donwload CV
                </m.button>
                <m.button 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                        variants= {{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 }
                    }}                  
                    className='text-[0.9rem] font-semibold rounded-2xl py-3 px-6 bg-[#BF91FA] sm:text-xl hover:!scale-[1.06] hover:drop-shadow-3xl  duration-200'>
                    <Link to="contact" spy={true} smooth={true} offset={-120} duration={500}>
                    Get in touch
                    </Link>
                </m.button>
            </div>
        </div>
    </section>
  )
}

export default Home