import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa"
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Techologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaHtml5 className='text-7xl text-orange-400'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaCss3 className='text-7xl text-blue-500'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <BiLogoJavascript className='text-7xl text-yellow-400'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <RiReactjsLine className='text-7xl text-blue-400'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <SiTailwindcss className='text-7xl text-blue-400'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaSass className='text-7xl text-red-300'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaBootstrap className='text-7xl text-purple-600'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaGitAlt className='text-7xl text-orange-600'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaGithub className='text-7xl text-white'/>
           </div>
           <div className='rounded-2xl border-4 border-neutral-800 p-4'>
             <FaNpm className='text-7xl text-red-400'/>
           </div>
        </div>
    </div>
  )
}

export default Techologies
