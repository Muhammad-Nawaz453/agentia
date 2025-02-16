import React from 'react'
import { LuBrain } from "react-icons/lu";
import { FiCpu } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";


export default function Technology() {
  return (
    <div id='technology' className='py-20 px-4 relative'>
        <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
    <h2 className=' text-4xl md:text-5xl font-bold mb-6'>
        <span className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>Powered by Advanced AI</span>
    </h2>
    <p className='text-xl text-gray-400'>Built on cutting-edge neural architectures</p>
        </div>

        <div className=' grid grid-cols-2 md:grid-cols-4 gap-8'>
    <div className='p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105'>
<div className='jsx-1acfa59fff5c82b4 w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform'>
<LuBrain className='w-[24px] h-[24px]'/>
</div>

<h3 className='text-lg font-semibold mb-2'>Neural Networks</h3>
<p className='text-sm text-gray-400'>Advanced neural architectures for complex decision making</p>
    </div>





    <div className='p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105'>
<div className='jsx-1acfa59fff5c82b4 w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform'>
<FiCpu className='w-[24px] h-[24px]'/>
</div>

<h3 className='text-lg font-semibold mb-2'>Deep Learning</h3>
<p className='text-sm text-gray-400'>Sophisticated deep learning models for pattern recognition</p>
    </div>




    <div className='p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105'>
<div className='jsx-1acfa59fff5c82b4 w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform'>
<FaCode className='w-[24px] h-[24px]'/>
</div>

<h3 className='text-lg font-semibold mb-2'>Advanced ML</h3>
<p className='text-sm text-gray-400'>Cutting-edge machine learning algorithms</p>
    </div>




    <div className='p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105'>
<div className='jsx-1acfa59fff5c82b4 w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform'>
<IoEarthOutline className='w-[24px] h-[24px]'/>
</div>

<h3 className='text-lg font-semibold mb-2'>Global Scale</h3>
<p className='text-sm text-gray-400'>Distributed AI processing across global networks</p>
    </div>
        </div>
        </div>
    </div>
  )
}

