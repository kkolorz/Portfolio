import { motion as m } from 'framer-motion'
import digitalAgency from '../assets/projects/digital-agency.png'
import portfolio from '../assets/projects/portfolio.png'
import html from '../assets/tech/html.svg'
import css from '../assets/tech/css.svg'
import js from '../assets/tech/js.svg'
import react from '../assets/tech/react.svg'
import tailwind from '../assets/tech/tailwind.svg'
import gulp from '../assets/tech/gulp.svg'
import sass from '../assets/tech/sass.svg'
import git from '../assets/tech/git.svg'
import figma from '../assets/tech/figma.svg'
import npm from '../assets/tech/npm.svg'

const Projects = () => {
  return (
    <section id='projects' className='max-w-[1200px] mx-auto px-6 flex flex-col md:pl-[200px] w-full h-full'>
        <m.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            transition={{ duration: 0.5}}
                variants= {{                    
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}               
            className='text-4xl md:text-[3.2rem] py-1 md:py-3 font-semibold'>Projects
        </m.h3>
        <m.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
                variants= {{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
            }}            
            className='text-[1.1rem] mb-4 pt-3 md:py-4'>
            Below you can check main technologies and tools I've use
        </m.p>
        <div className='w-full lg:w-[90%] grid grid-cols-1 gap-10 text-center py-8'>
            {/* Projects cards */}
            <m.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                    variants= {{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}              
                className='flex flex-col justify-center items-center p-4 md:p-8 rounded-3xl bg-[rgba(0,0,0,.13)] backdrop-blur-lg shadow-3xl cursor-pointer'>
                <div className='mb-4'>
                    <img src={digitalAgency} alt="Image of project digital agency - figma clone" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold my-3'>Digital Agency - Figma Clone</h4>
                    <p className='max-w-[600px] content-center my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet hic molestias repudiandae cumque in exercitationem?</p>
                    <div>                        
                        <div className='h-6 md:h-8 flex justify-center gap-2 mt-7'>
                            <img src={html} alt="Tech stack image" />
                            <img src={sass} alt="Tech stack image" />
                            <img src={js} alt="Tech stack image" />
                            <img src={gulp} alt="Tech stack image" />
                            <img src={git} alt="Tech stack image" />
                            <img src={npm} alt="Tech stack image" />
                        </div>
                    </div>
                </div>
            </m.div>
            <m.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                    variants= {{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}              
                className='flex flex-col justify-center items-center p-4 md:p-8 rounded-3xl bg-[rgba(0,0,0,.13)] backdrop-blur-lg shadow-3xl cursor-pointer'>
                <div className='mb-4'>
                    <img src={portfolio} alt="Image of portfolio project" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold my-3'>Personal Portfolio</h4>
                    <p className='max-w-[600px] content-center my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet hic molestias repudiandae cumque in exercitationem?</p>
                    <div>                        
                        <div className='h-6 md:h-8 flex justify-center gap-2 mt-7'>
                            <img src={react} alt="Tech stack image" />
                            <img src={tailwind} alt="Tech stack image" />
                            <img src={figma} alt="Tech stack image" />
                            <img src={git} alt="Tech stack image" />
                            <img src={npm} alt="Tech stack image" />
                        </div>
                    </div>
                </div>
            </m.div>
        </div>
    </section>
  )
}

export default Projects