"use client"
import React from 'react'
import { RiRobot2Line } from "react-icons/ri";
import {TypeAnimation} from 'react-type-animation'
import { IoIosArrowForward } from "react-icons/io";

export default function Hero()  {
  return (
    <div className="bg-gradient-to-b from-black via-black to-purple-900/20 ">

<div className="justify-center flex">
<div className="mt-24 items-center flex justify-center bg-zinc-950 rounded-full w-[300px] h-[50px] text-purple-400">
  <div className="animate-pulse bg-purple-400 w-3 h-3 mr-3 rounded-full"/>
  <h1>POWERED BY PANAVERSITY</h1>
</div>
</div>


<div className="mt-4 max-w-6xl mx-auto text-center">
  <h1 className="jsx-1acfa59fff5c82b4 text-5xl md:text-7xl font-bold mb-8 "><span className='jsx-1acfa59fff5c82b4 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text'>Enterprise AI Agents</span>
  <span className='jsx-1acfa59fff5c82b4 block text-white mt-2'>for the Future</span>
  </h1>
  

  <div className="max-w-3xl mx-auto bg-white/5 rounded-xl p-6 mb-12 backdrop-blur-sm border border-purple-500/20 mt-4">
  <div className="flex items-start space-x-4">
    <div className=" w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
    <RiRobot2Line className="w-6 h-6"/>
    </div>

    <div className="flex-1 text-left">
      <div className="bg-white/5 rounded-lg p-4">
      <p className=" text-gray-300">
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Would you like to explore our AI integration solutions?",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Hello! I'm your AI agent. How can I enhance your business today?",
        1000,
        "I can help optimize your workflows with neural networks.",
        1000,
        "Let me assist you with advanced data analytics.",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '18px', display: 'inline-block' }}
      repeat={Infinity}
    />
        <span className="inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-pulse"></span>
      </p>
      </div>
    </div>



  
  </div>
  
  </div>


  <div className=" flex flex-col md:flex-row gap-6 justify-center items-center">
      <button className="jsx-1acfa59fff5c82b4 group bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center">
      Deploy Your AI Agent
      <IoIosArrowForward className="w-[24px] h-[24px] hover:translate-x-1 transition-transform"/>
      </button>

      <button className="px-8 py-4 rounded-lg text-lg font-bold border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">Watch Demo</button>
    </div>
</div>
    </div>
  )
}

