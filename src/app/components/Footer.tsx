import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { RiRobot2Line } from "react-icons/ri";
export default function Footer(){
  return (
    <div className='jsx-1acfa59fff5c82b4 bg-black border-t border-purple-500/10'>
        <div className='jsx-1acfa59fff5c82b4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='jsx-1acfa59fff5c82b4 grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='jsx-1acfa59fff5c82b4 space-y-4'>
                <div className='jsx-1acfa59fff5c82b4 flex items-center space-x-2'>
                    <RiRobot2Line className='w-8 h-8 text-purple-500'/>
                    <span className='jsx-1acfa59fff5c82b4 text-xl font-bold'>Agentia World</span>
                </div>

                <p className='jsx-1acfa59fff5c82b4 text-gray-400'>Next-generation AI agents powering the future of enterprise intelligence.</p>

                <div className='jsx-1acfa59fff5c82b4 flex space-x-4'>
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




            <div>
                <h3 className='jsx-1acfa59fff5c82b4 text-lg font-semibold mb-4'>Product</h3>
                <ul className='space-y-2'>
                    <li><Link href="#features" className='text-gray-400 hover:text-white transition-colors'>Features</Link></li>
                    <li><Link href="#pricing" className='text-gray-400 hover:text-white transition-colors'>Pricing</Link></li>
                    <li><Link href="#" className='text-gray-400 hover:text-white transition-colors'>Documentation</Link></li>
                    <li><Link href="#" className='text-gray-400 hover:text-white transition-colors'>API</Link></li>
                </ul>
            </div>
            <div>
                <h3 className='jsx-1acfa59fff5c82b4 text-lg font-semibold mb-4'>Company</h3>
                <ul className='space-y-2'>
                    <li><Link href="#" className='text-gray-400 hover:text-white transition-colors'>About</Link></li>
                    <li><Link href="#" className='text-gray-400 hover:text-white transition-colors'>Blog</Link></li>
                    <li><Link href="#" className='text-gray-400 hover:text-white transition-colors'>Careers</Link></li>
                    <li><Link href="#contact" className='text-gray-400 hover:text-white transition-colors'>Contacts</Link></li>
                </ul>
            </div>
            <div>
                <h3 className='jsx-1acfa59fff5c82b4 text-lg font-semibold mb-4'>Legal</h3>
                <ul className='space-y-2'>
                    <li><Link href="#features" className='text-gray-400 hover:text-white transition-colors'>Privacy</Link></li>
                    <li><Link href="#pricing" className='text-gray-400 hover:text-white transition-colors'>Terms</Link></li>
                    <li><Link href="#" className='text-gray-400 hover:text-white transition-colors'>Security</Link></li>
                    <li><Link href="#" className='text-gray-400 hover:text-white transition-colors'>Compilance</Link></li>
                </ul>
            </div>
            </div>



            <div className='jsx-1acfa59fff5c82b4 mt-8 pt-8 border-t border-purple-500/10 text-center text-gray-400'>
            <p>© 2025 Agentia World. Powered by Panaversity. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

