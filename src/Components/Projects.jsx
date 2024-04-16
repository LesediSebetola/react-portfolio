import React from 'react'
import GazaTech from "../Assets/gaza technologies.png";
import calculator from "../Assets/calculator.webp";
import notes from "../Assets/notes.PNG";
import todo from "../Assets/todo.jpg";
import portfolio from "../Assets/portfolio.PNG";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 bp-4'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        
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
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                  
                  </div>
                  <a href="https://www.gazatech.co.za/"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Live Site</span></a>
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
                     <h6 className='mb-2 font-semibold'>Waether App</h6>
                     <p className='mb-4 text-neutral-400'>A personal portfolio website showcasing projects, skills, and contact information.</p>
                    
                     <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>React.js</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>

                  
                  </div>
                  <a href="https://github.com/LesediSebetola/weather-app"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Source Code</span></a>
                  <a href="https://lesedisebetola.github.io/weather-app/"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Live Site</span></a>
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
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind-CSS</span>
                  
                  </div>
                  
                  <a href="https://github.com/LesediSebetola/react-portfolio"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Source Code</span></a>
                  <a href="https://lesedisebetola.github.io/react-portfolio/"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Live Site</span></a>
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
                     <h6 className='mb-2 font-semibold'>Bank IT Landing Page</h6>
                     <p className='mb-4 text-neutral-400'>I have constructed and enhanced a professional weather website where you can search and get weather results of different areas around the world using React to create a seamless and responsive experience for potential viewers.</p>
                     
                     <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Javascript</span>
                  
                  </div>
                  <a href="https://github.com/LesediSebetola/BankIT-React"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Source Code</span></a>
                  <a href="https://lesedisebetola.github.io/BankIT-React/"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Live Site</span></a>
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
                     <p className='mb-4 text-neutral-400'>Introducing my modern and functional calculator, built using HTML, CSS, and JavaScript. This sleek and intuitive calculator was designed with a simple and clean user interface, making it easy to perform quick and accurate calculations.</p>
                     
                     <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Javascript</span>
                  
                  </div>
                  <a href="https://github.com/LesediSebetola/calculator"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Source Code</span></a>
                  <a href="https://lesedisebetola.github.io/calculator/"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Live Site</span></a>
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
                     <p className='mb-4 text-neutral-400'>It’s a notes app developed with HTML, CSS, and JavaScript. This app offers a seamless environment for users to create, edit, and organize their notes effortlessly.</p>
                    
                     <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Javascript</span>

                  
                  </div>
                  <a href="https://github.com/LesediSebetola/notes-app"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Source Code</span></a>
                  <a href="https://lesedisebetola.github.io/notes-app/"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Live Site</span></a>
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
                     <p className='mb-4 text-neutral-400'>I have successfully designed and developed and orphanage website using React library to ensure visually appealing and user-friendly interface, showcasing key information and engaging content for visitors.</p>
                     
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</span>
                      <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Javascript</span>
                  
                  </div>
                  <a href="https://github.com/LesediSebetola/to-do-list"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Source Code</span></a>
                  <a href="https://lesedisebetola.github.io/to-do-list/"><span className='mr-2 rounded  px-2 py-1 text-sm font-medium text-purple-900'>Live Site</span></a>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Projects
