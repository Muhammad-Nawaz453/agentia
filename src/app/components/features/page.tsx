import React from 'react'
import { LuBrain } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { FaTerminal } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

export default function Features(){
  return (
    <div id='features' className=' py-20 px-4 relative overflow-hidden'>
        <div className=' max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
            <h2 className=' text-4xl md:text-5xl font-bold mb-6'>
        <span className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>Neural Capabilities</span>
    </h2>
    <p className='text-xl text-gray-400'>Powered by next-generation artificial intelligence</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 '>
<div className=' w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4'>
<LuBrain className='w-[24px] h-[24px]'/>
</div>

        <h3 className='text-xl font-bold mb-2'>Autonomous Learning</h3>
        <p className='text-gray-400'>Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning</p>
                </div>




                <div className='p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 '>
<div className=' w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4'>
<FiMessageSquare className='w-[24px] h-[24px]'/>
</div>

        <h3 className='text-xl font-bold mb-2'>Multi-Modal Intelligence</h3>
        <p className='text-gray-400'>Advanced agents capable of processing text, voice, and visual data for comprehensive understanding</p>
                </div>






                <div className='p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 '>
<div className=' w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4'>
<FaTerminal className='w-[24px] h-[24px]'/>
</div>

        <h3 className='text-xl font-bold mb-2'>Cognitive Integration</h3>
        <p className='text-gray-400'>Seamless integration with existing systems through advanced cognitive APIs and neural bridges</p>
                </div>





                <div className='p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 '>
<div className=' w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4'>
<FiShield className='w-[24px] h-[24px]'/>
</div>

        <h3 className='text-xl font-bold mb-2'>Ethical AI Framework</h3>
        <p className='text-gray-400'>Built-in ethical guidelines and safety protocols ensuring responsible AI deployment</p>
                </div>
            </div>
        </div>
    </div>
  )
}

