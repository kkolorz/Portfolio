import { motion as m} from 'framer-motion'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import github from '../assets/github.svg'
import gulp from '../assets/gulp.svg'
import bootstrap from '../assets/bootstrap.svg'
import vsc from '../assets/vsc.svg'


const tech = [
    {
        name: "HTML-5",
        image: html,
    },
    {
        name: "CSS-3",
        image: css,
    },
    {
        name: "JavaScript",
        image: js,
    },
    {
        name: "React",
        image: react,
    },
    {
        name: "Tailwind CSS",
        image: tailwind,
    },
    {
        name: "VSC",
        image: vsc,
    },
    {
        name: "Gulp",
        image: gulp,
    },
    {
        name: "GitHub",
        image: github,
    },
    {
        name: "Bootstrap",
        image: bootstrap,
    },
]

const Skills = () => {
  return (
    <section id='skills' className='max-w-[1200px] mx-auto px-6 flex flex-col md:pl-[200px] w-full h-screen'>
        <div>
            <h3 className='text-4xl md:text-[3rem] py-1 md:py-3 font-semibold'>Skills</h3>
            <p className='text-[1.1rem] mb-4 py-3 md:py-4'>Below you can check main technologies and tools I've use</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8'>
            {tech.map((item, index) => (
                <div key={index} className="flex flex-col bg-[rgba(0,0,0,.13)] p-5 lg:p-7 rounded-3xl shadow-2xl hover:scale-105 duration-300">
                    <div>
                        <img className='w-20 h-20 lg:w-24 lg:h-24 mx-auto' src={item.image} alt="Image of technology" />
                    </div>
                    <div className='mt-10 flex justify-center items-center'>
                        <p className='text-md md:text-lg lg:text-lg font-semibold'>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills