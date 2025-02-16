import React from 'react'
import { LuBrain } from "react-icons/lu";
import { FiServer } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
export default function Agents(){
  return (
    <div id='agents' className='py-20 px-4 relative'>
        <div className='jsx-1acfa59fff5c82b4 max-w-6xl mx-auto'>
    <div className='jsx-1acfa59fff5c82b4 text-center mb-16'>
    <h2 className='jsx-1acfa59fff5c82b4 text-4xl md:text-5xl font-bold mb-6'>
        <span className='jsx-1acfa59fff5c82b4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>
            AI Solutions
        </span>
    </h2>
    </div>





    <div className='jsx-1acfa59fff5c82b4 grid md:grid-cols-3 gap-8'>
        <div className='jsx-1acfa59fff5c82b4 p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300'>
<div className='jsx-1acfa59fff5c82b4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4'>
<LuBrain className='w-[24px] h-[24px]'/>
</div>

<h3 className='jsx-1acfa59fff5c82b4 text-xl font-bold mb-2'>Enterprise AI</h3>
<p className='text-gray-400'>Custom AI agents designed for enterprise-scale operations and decision-making</p>
        </div>






        <div className='jsx-1acfa59fff5c82b4 p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300'>
<div className='jsx-1acfa59fff5c82b4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4'>
<FiServer className='w-[24px] h-[24px]'/>
</div>

<h3 className='jsx-1acfa59fff5c82b4 text-xl font-bold mb-2'>Neural Operations</h3>
<p className='text-gray-400'>Automated workflow optimization through distributed neural networks</p>
        </div>






        <div className='jsx-1acfa59fff5c82b4 p-6 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300'>
<div className='jsx-1acfa59fff5c82b4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4'>
<FiShield className='w-[24px] h-[24px]'/>
</div>

<h3 className='jsx-1acfa59fff5c82b4 text-xl font-bold mb-2'>Secure Intelligence</h3>
<p className='text-gray-400'>Privacy-first AI solutions with military-grade security protocols</p>
        </div>
    </div>
        </div>
    </div>
  )
}
