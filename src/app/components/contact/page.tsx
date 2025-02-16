import Link from 'next/link';
import React from 'react'

import { HiOutlineMail } from "react-icons/hi";
import { IoEarthOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


export default function Contact(){
  return (
    <div id='contact' className='jsx-1acfa59fff5c82b4 py-20 px-4 relative'>
        <div className='jsx-1acfa59fff5c82b4 max-w-6xl mx-auto'>
        <div className='jsx-1acfa59fff5c82b4 text-center mb-16'>
    <h2 className='jsx-1acfa59fff5c82b4 text-4xl md:text-5xl font-bold mb-6'>
        <span className='jsx-1acfa59fff5c82b4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>
            Get in Touch
        </span>
    </h2>
    <p className='text-gray-400 text-xl'>Ready to transform your business with AI?</p>
    </div>



    <div className='jsx-1acfa59fff5c82b4 grid md:grid-cols-2 gap-12'>
        <div className='jsx-1acfa59fff5c82b4 space-y-6'>
            <h3 className='jsx-1acfa59fff5c82b4 text-2xl font-bold'>Contact Information</h3>

            <div className='jsx-1acfa59fff5c82b4 space-y-4'>
                <div className='jsx-1acfa59fff5c82b4 flex items-center space-x-3'>
            <HiOutlineMail className='w-6 h-6 text-purple-500'/>
            <span>contact@agentiaworld.com</span>
                </div>
                <div className='jsx-1acfa59fff5c82b4 flex items-center space-x-3'>
            <IoEarthOutline className='w-6 h-6 text-purple-500'/>
            <span>www.agentiaworld.com</span>
                </div>
            </div>


            <div className='jsx-1acfa59fff5c82b4 flex space-x-4 pt-4'>
             <Link href="#" className='jsx-1acfa59fff5c82b4 text-gray-400 hover:text-white transition-colors'>
            <FiGithub className='w-6 h-6'/>
            </Link>   
             <Link href="#" className='jsx-1acfa59fff5c82b4 text-gray-400 hover:text-white transition-colors'>
            <FaLinkedin className='w-6 h-6'/>
            </Link>   
             <Link href="#" className='jsx-1acfa59fff5c82b4 text-gray-400 hover:text-white transition-colors'>
            <FaTwitter className='w-6 h-6'/>
            </Link>   
            </div>
            

        </div>




        <form className='jsx-1acfa59fff5c82b4 space-y-6'>
            <div className='jsx-1acfa59fff5c82b4 grid grid-cols-2 gap-6'>
        <input placeholder='First Name' className='jsx-1acfa59fff5c82b4 bg-white/5 border border-purple-500/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500'
        type='text'
        />
        <input placeholder='Last Name' className='jsx-1acfa59fff5c82b4 bg-white/5 border border-purple-500/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500'
        type='text'
        />
            </div>

            <input placeholder='Email Address' className='jsx-1acfa59fff5c82b4 w-full bg-white/5 border border-purple-500/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500'
        type='email'
        />

        <textarea placeholder='Your Message' rows={4} className='jsx-1acfa59fff5c82b4 w-full bg-white/5 border border-purple-500/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500'></textarea>


            <button className="jsx-1acfa59fff5c82b4 w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300">Send Message</button>
        </form>






    </div>
        </div>
    </div>
  )
}

