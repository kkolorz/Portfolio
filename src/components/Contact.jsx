import React from 'react';
import { motion as m } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {

    const formik = useFormik ({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email().matches('/@[^.]*\./'),
            email: Yup.string().email().matches('/^(?!.*[^,]*,)/'),
            message: Yup.string().required("Message field is required and cannot be empty, please enter your message")
        }),

        // Submit form
        onSubmit: (values) => {
            console.log(values)
        }
    })



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
                <p className='text-xl py-1'>Let's talk or shoot me an email directly on <span></span></p>
            </div>
            <form 
                onSubmit={formik.handleSubmit}
                action="">
                {/* Name input field */}
                <div className='flex flex-col mb-6'>
                    <label 
                        className={`mb-2 text-2xl ${formik.touched.name && formik.errors.name ? 'text-red-500' : ''}`}
                        htmlFor="name">
                            {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                    </label>
                    <input 
                        className='border-4 outline-none p-4 rounded-md focus:border-[#BF91FA]  text-black text-lg'
                        placeholder='Enter your name'
                        name="name"
                        type="text"
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} />
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
                        name="email"
                        type="email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}/>
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
                        name='message'
                        value={formik.values.message} 
                        onChange={formik.handleChange} >
                    </textarea>
                </div>
                {/* Submit form button */}
                <button 
                    className='text-[0.9rem] font-semibold rounded-2xl my-8 py-3 px-6 bg-[#BF91FA] sm:text-xl hover:!scale-[1.06] hover:drop-shadow-3xl  duration-200'
                    type="submit">
                        Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact