import React from 'react'
import profilrPic from "../Assets/profilePic.jpg"

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pd-4 lg:mb-35'>
       <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2'>
             <div className='flex flex-col items-center lg:items-start'>
              <h1 className='ph-16 text-6xl font-thin tracking-tight lg:mt
              lg:text-6xl'>Lesedi Sebetola</h1>
              <span className='bg-gradient-to-r font-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl 
              tracking-thin mt-8'>Frontend Web Developer</span>
              <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am a self-taught web developer, I have invested significant time and effort
                 into acquiring a comprehensive understanding of web development technologies
                  and best practices. While I may not have formal academic qualifications or 
                  work experience, I have dedicated countless hours to self-study, building a 
                  robust portfolio of projects to showcase my abilities. I am seeking 
                  opportunities to utilize my skills in a professional capacity.
                  </p>
             </div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                  <img src={profilrPic} alt="Lesedi Sebetola" className='rounded'/>
                </div>
          </div>
       </div>
    </div>
  )
}

export default Hero
