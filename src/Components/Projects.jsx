import React from 'react'
import { PROJECTS } from '../Constants'
import GazaTech from "../Assets/gaza technologies.png";
import calculator from "../Assets/calculator.webp";
import notes from "../Assets/notes.PNG";
import todo from "../Assets/todo.jpg";
import portfolio from "../Assets/portfolio.PNG";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 bp-4'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        <div>{PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded'/>
            </div>
            <div>
                  <div className='w-full max-w-xl lg:w-3/4'>
                     <h6 className='mb-2 font-semibold'>{project.title}</h6>
                     <p className='mb-4 text-neutral-400'>{project.description}</p>
                     {project.technologies.map((tech, index) => (
                      <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> {tech}</span>
                     ))}
                  </div>
                </div>
          </div>
        ))}
        </div>

        <div>
          <div className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={GazaTech} width={150} height={150} alt="" className='mb-6 rounded'/>
            </div>
            <div>
                  <div className='w-full max-w-xl lg:w-3/4'>
                     <h6 className='mb-2 font-semibold'>Gaza Tech Website</h6>
                     <p className='mb-4 text-neutral-400'>Gaza Technologies is a newly started company of a close friend where I helped them build their website. Collaborated to develop modular, reusable code components by writing clean, efficient code to implement new features and functionalities of the entire project and website maintenance</p>
                     
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>React.js</span>
                  
                  </div>
                </div>
          </div>
        </div>
        <div>
          <div className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={portfolio} width={150} height={150} alt="" className='mb-6 rounded'/>
            </div>
            <div>
                  <div className='w-full max-w-xl lg:w-3/4'>
                     <h6 className='mb-2 font-semibold'>Portfolio</h6>
                     <p className='mb-4 text-neutral-400'>Welcome to my portfolio website, crafted with precision using React.js and Tailwind CSS. Explore a collection of my projects and experience firsthand the seamless user experience and stunning design that these cutting-edge technologies have enabled. From responsive layouts to dynamic components, every detail has been carefully crafted to showcase my skills and creativity. Dive in and discover the perfect blend of functionality and aesthetics that define my work. Let's connect and bring your ideas to life!</p>
                     
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>React.js</span>
                  
                  </div>
                </div>
          </div>
        </div>
        <div>
          <div className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={calculator} width={150} height={150} alt="" className='mb-6 rounded'/>
            </div>
            <div>
                  <div className='w-full max-w-xl lg:w-3/4'>
                     <h6 className='mb-2 font-semibold'>Calculator</h6>
                     <p className='mb-4 text-neutral-400'>Experience the simplicity and power of my calculator website, meticulously handcrafted with HTML, CSS, and JavaScript. Whether you need to crunch numbers quickly or solve complex equations, this intuitive tool is here to assist you. With a clean and user-friendly interface, performing calculations has never been easier. From basic arithmetic to advanced functions, this calculator is versatile and reliable. Explore the seamless integration of design and functionality, showcasing the capabilities of web technologies at their best. Start calculating with ease and efficiency today!</p>
                     
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>React.js</span>
                  
                  </div>
                </div>
          </div>
        </div>
        <div>
          <div className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={notes} width={150} height={150} alt="" className='mb-6 rounded'/>
            </div>
            <div>
                  <div className='w-full max-w-xl lg:w-3/4'>
                     <h6 className='mb-2 font-semibold'>Notes App</h6>
                     <p className='mb-4 text-neutral-400'>A personal portfolio website showcasing projects, skills, and contact information.</p>
                     
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>React.js</span>
                  
                  </div>
                </div>
          </div>
        </div>
        <div>
          <div className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={todo} width={150} height={150} alt="" className='mb-6 rounded'/>
            </div>
            <div>
                  <div className='w-full max-w-xl lg:w-3/4'>
                     <h6 className='mb-2 font-semibold'>Todo list</h6>
                     <p className='mb-4 text-neutral-400'>Experience the simplicity and power of my calculator website, meticulously handcrafted with HTML, CSS, and JavaScript. Whether you need to crunch numbers quickly or solve complex equations, this intuitive tool is here to assist you. With a clean and user-friendly interface, performing calculations has never been easier. From basic arithmetic to advanced functions, this calculator is versatile and reliable. Explore the seamless integration of design and functionality, showcasing the capabilities of web technologies at their best. Start calculating with ease and efficiency today!</p>
                     
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>React.js</span>
                  
                  </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Projects
