import { motion as m} from 'framer-motion'
import html from '../assets/tech/html.svg'
import css from '../assets/tech/css.svg'
import js from '../assets/tech/js.svg'
import react from '../assets/tech/react.svg'
import tailwind from '../assets/tech/tailwind.svg'
import github from '../assets/tech/github.svg'
import gulp from '../assets/tech/gulp.svg'
import bootstrap from '../assets/tech/bootstrap.svg'
import vsc from '../assets/tech/vsc.svg'
import sass from '../assets/tech/sass.svg'
import git from '../assets/tech/git.svg'
import npm from '../assets/tech/npm.svg'


const tech = [
    {
        name: "HTML-5",
        image: html
    },
    {
        name: "CSS-3",
        image: css
    },
    {
        name: "JavaScript",
        image: js
    },
    {
        name: "React",
        image: react
    },
    {
        name: "Tailwind CSS",
        image: tailwind
    },
    {
        name: "Sass",
        image: sass
    },
    {
        name: "Bootstrap",
        image: bootstrap
    },
    {
        name: "VSC",
        image: vsc
    },
    {
        name: "Gulp",
        image: gulp
    },
    {
        name: "GitHub",
        image: github
    },
    {
        name: "Git",
        image: git
    },
    {
        name: "npm",
        image: npm
    },
]

const Skills = () => {
  return (
    <section id='skills' className='max-w-[1200px] mx-auto px-6 mb-32 md:mb-40 flex flex-col md:pl-[200px] w-full h-full'>
        <m.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            transition={{ duration: 0.5}}
                variants= {{                    
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}             
            className='text-4xl md:text-[3rem] py-1 md:py-3 font-semibold'>
            Skills
        </m.h3>
        <m.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
                variants= {{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
            }}            
            className='text-[1.1rem] mb-4 py-3 md:py-4'>
            Below you can check main technologies and tools I've use
        </m.p>
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3}}
                variants= {{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}          
            className='w-full lg:w-[90%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8'>
                {tech.map((item, index) => (
                    <div key={index} className="flex flex-col bg-[rgba(0,0,0,.13)] p-5 lg:p-6 rounded-3xl shadow-2xl hover:scale-105 duration-300">
                        <div>
                            <img className='w-14 h-14 lg:w-18 lg:h-18 mx-auto' src={item.image} alt="Image of technology" />
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='text-md md:text-lg font-semibold'>{item.name}</p>
                        </div>
                    </div>
                ))}
        </m.div>
    </section>
  )
}

export default Skills