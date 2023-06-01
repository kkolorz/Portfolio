import React from 'react';
import { motion as m } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className='max-w-[1200px] mx-auto px-6 mb-32 md:mb-40 flex flex-col md:pl-[200px] w-full h-full'>
        <div className=''>
            <m.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true, amount: 0.5 }}
              transition={{ duration: 0.5}}
              variants= {{                    
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
              }}  
              className='text-4xl md:text-[3.2rem] py-1 md:py-3 font-semibold'>
                About me
            </m.h3>
        </div>
        <div className='flex flex-col lg:flex-row mt-[3rem] md:mt-[4rem] lg:mt-[6rem]'>
          <div className='lg:max-w-[500px] mr-6'>
            <m.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true, amount: 0.5 }}
              transition={{ duration: 0.5}}
              variants= {{                    
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
              }}              
              className='text-lg md:text-xl leading-8 md:leading-9 lg:leading-10 mb-[3rem] text-justify'>
                My adventure with programming began a few years ago when I started learning the C++ language. I liked it so much that I decided to start studying computer science. I got to know web technologies closely during my studies, which later became a passion.
            </m.p>
            <m.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants= {{                    
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
              }}               
              className='text-lg md:text-xl leading-8 md:leading-9 lg:leading-10 mb-[3rem] text-justify'>
                I'm an ambitious person who pays great attention to details. I want to expand my knowledge in the field of web development.
            </m.p>
          </div>
          {/* <div className=''>
            <img className='' src={} alt="" />
          </div> */}
        </div>
    </section>
  )
}

export default About