import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Techologies from './Components/Techologies';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialised bg-black selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'></div>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-
      [radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba[255,255,0))]'></div>

      <div className='container mx-auto px-8'>
      <Navbar/>
      <Hero/>
      <Techologies/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
       
        
       
    </div>
  );
}

export default App;
