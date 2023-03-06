import React from 'react'
import { motion as m } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className='w-full h-screen'>
        <div>
        <m.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once:false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants= {{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
                className='text-xl sm:text-xl py-1'><span className='text-[#BF91FA]'>Hello there,</span> my name is
            </m.p>
        </div>
    </section>
  )
}

export default About