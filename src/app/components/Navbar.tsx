"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { RiRobot2Line } from "react-icons/ri";
import { HiMenuAlt3 } from 'react-icons/hi';
export default function Navbar(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  
  return (
    <div className="jsx-1acfa59fff5c82b4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-md shadow-lg shadow-purple-500/10">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='flex items-center justify-between h-16'>
<div className='jsx-1acfa59fff5c82b4 flex items-center'>
<Link href="#" className='jsx-1acfa59fff5c82b4 flex items-center space-x-2'>
<RiRobot2Line className='text-purple-500 w-8 h-8'/>
<span className='jsx-1acfa59fff5c82b4 text-xl font-bold'>Agentia World</span>
</Link>
</div>
<div className='jsx-1acfa59fff5c82b4 hidden md:block'>
      <div className='jsx-1acfa59fff5c82b4 flex items-center space-x-8'>
        <Link href="#features" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Features</Link>
        <Link href="#technology" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Technology</Link>
        <Link href="#agents" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Agents</Link>
        <Link href="#pricing" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Pricing</Link>
        <Link href="#contact" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Contact</Link>

        <button className="jsx-1acfa59fff5c82b4 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300">Launch Console</button>
      </div>


      
    </div>

    <HiMenuAlt3 className="md:hidden text-5xl cursor-pointer ml-4 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <div className={`absolute top-16 left-0 w-full bg-black flex flex-col  gap-6 font-semibold text-lg transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"} md:hidden`}>
      <Link href="#features" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Features</Link>
        <Link href="#technology" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Technology</Link>
        <Link href="#agents" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Agents</Link>
        <Link href="#pricing" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Pricing</Link>
        <Link href="#contact" className="jsx-1acfa59fff5c82b4 text-gray-300 hover:text-white transition-colors duration-300">Contact</Link>

        <button className="jsx-1acfa59fff5c82b4 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300">Launch Console</button>
       
            </div>
    </div>





    
      </div>
     
    </div>
  )
}

