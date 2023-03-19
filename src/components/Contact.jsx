import React from 'react';
import { useForm } from 'react-hook-form';
import { motion as m } from 'framer-motion';


const Contact = () => {
    const { register, trigger, clearErrors, formState: {errors} } = useForm();

    const onSubmit = async e => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id="contact" className='max-w-[1200px] mx-auto px-6 my-14 md:my-20 lg:my-28 flex flex-col md:pl-[200px] w-full h-full'>
        <div>
            <m.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            transition={{ duration: 0.5}}
                variants= {{                    
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}               
            className='text-4xl md:text-[3.2rem] py-1 md:py-3 font-semibold'>Contact</m.h3>
        </div>
        <div className='w-full lg:w-[90%] py-8'>
            <div className='mb-8'>
                <m.p 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                        variants= {{                    
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}                     
                    className='text-xl py-1'>Let's talk or shoot me an email directly on <span className='font-bold text-[#BF91FA]'>karolkolorzdev@gmail.com</span>
                </m.p>
            </div>
            <m.form 
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                    variants= {{                    
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}             
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/4c11a95eb3372d46a348d02a40e5c1a9"
                method="POST">
                {/* Name input field */}
                <div className='flex flex-col mb-6'>
                    <label 
                        className={'mb-2 text-2xl'}
                        htmlFor="name">
                            Name
                    </label>
                    <input 
                        className='border-4 outline-none p-4 rounded-md focus:border-[#BF91FA]  text-black text-lg'
                        placeholder='Enter your name'
                        type="text"
                        {...register("name", {
                            required: true,
                        })}
                        onChange={() => clearErrors("name")} 
                    />
                    {errors.name && (
                        <p className='text-red-500 mt-2 text-lg'>
                            {errors.name.type === 'required' && 'This field is required.'}
                        </p>
                    )}
                </div>
                {/* Email input field */}
                <div className='flex flex-col mb-6'>
                    <label 
                        className='mb-2 text-2xl'
                        name="emial">
                            Email
                    </label>
                    <input 
                        className='border-4 outline-none p-4 rounded-md focus:border-[#BF91FA] text-black text-lg'
                        placeholder='Enter your email'
                        type="text" 
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        onChange={() => clearErrors("email")}
                    />
                    {errors.email && (
                        <p className='text-red-500 mt-2 text-lg'>
                            {errors.email.type === 'required' && 'This field is required.'}
                            {errors.email.type === 'pattern' && 'Invalid email address'}
                        </p>
                    )}
                </div>
                {/* Message input field */}
                <div>
                    <label 
                        className='text-2xl'
                        htmlFor="text">
                            Message
                    </label>
                    <textarea
                        className='w-full h-[180px] min-h-[180px] text-xl border-4 outline-none mt-2 p-2 rounded-md focus:border-[#BF91FA] focus:ring-[#BF91FA] focus:shadow-2xl text-black'
                        placeholder='Enter your message'
                        {...register("message", {
                            required: true,
                            maxLength: 2000
                        })}
                        onChange={() => clearErrors("message")}
                    >
                    </textarea>
                    {errors.message && (
                        <p className='text-red-500 mt-2 text-lg'>
                            {errors.message.type === 'required' && 'This field is required.'}
                            {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
                        </p>
                    )}
                </div>
                {/* Submit form button */}
                <button 
                    className='text-[0.9rem] font-semibold rounded-2xl my-8 py-3 px-6 bg-[#BF91FA] sm:text-xl hover:!scale-[1.06] hover:drop-shadow-3xl  duration-200'
                    type="submit">
                        Send Message
                </button>
            </m.form>
        </div>
    </section>
  )
}

export default Contact