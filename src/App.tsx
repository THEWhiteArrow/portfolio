
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import './reset.css'
import Loader from './Loader';
import Hero from './Hero';
import About from './About';
import TransitionSpace from './TransitionSpace';
import ProjectSection from './ProjectSection';
import Contact from './Contact';
import Cursor from './Cursor';
import { useEffect, useRef, useState } from 'react';
import Skills from './Skills';
import Vision from './Vision';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [heroHeight, setHeroHeight] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [projectHeight, setProjectHeight] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);
  const [skillsHeight, setSkillsHeight] = useState(0);
  const [visionHeight, setVisionHeight] = useState(0);

  const onScroll = (e: any) => {
    setScrollTop(Math.round(e.target.documentElement.scrollTop));
    setHeroHeight(document.querySelector('.Hero')?.clientHeight || 0)
    setAboutHeight(document.querySelector('.About')?.clientHeight || 0)
    setProjectHeight(document.querySelector('.ProjectSection')?.clientHeight || 0)
    setContactHeight(document.querySelector('.Contact')?.clientHeight || 0)
    setSkillsHeight(document.querySelector('.Skills')?.clientHeight || 0)
    setVisionHeight(document.querySelector('.Vision')?.clientHeight || 0)
    setWindowHeight(window.innerHeight)
  }

  // const loader = new URLSearchParams(useLocation().search).get('load') != 'fast'
  // const onResize = (e: any) => {
  //   setHeroHeight(document.querySelector('.Hero')?.clientHeight || 0)
  //   setAboutHeight(document.querySelector('.About')?.clientHeight || 0)
  //   setProjectHeight(document.querySelector('.ProjectSection')?.clientHeight || 0)
  //   setContactHeight(document.querySelector('.Contact')?.clientHeight || 0)
  //   setWindowHeight(window.innerHeight)

  // }

  const min = Math.min
  const max = Math.max
  const abs = Math.abs

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    // window.addEventListener('resize', onResize); 
    window.addEventListener('load', onScroll);
  }, []);




  const heroPercentage = scrollTop / heroHeight * 100;
  const skillsPercentage = (windowHeight + aboutHeight + projectHeight - scrollTop) / skillsHeight * 100;
  console.log(Math.floor(skillsPercentage))

  const heroStyle = {
    position: 'fixed',
    left: `clamp(-100%, -${heroPercentage}%, 0%)`
  }
  const aboutStyle = {
    position: 'fixed',
    left: `clamp(0%, ${70 - heroPercentage}%, 70%)`,
    top: `${min(0, windowHeight - scrollTop)}px`,
  }
  const projectsStyle = {
    position: 'fixed',
    top: `${min(windowHeight, windowHeight + aboutHeight - scrollTop)}px`,
  }

  const skillsStyle = {
    position: 'fixed',
    top: `${max(0, min(windowHeight, windowHeight + aboutHeight + projectHeight - scrollTop))}px`,
    left: `clamp(-100%, ${skillsPercentage}% ,0%)`,
  }



  const visionStyle = {
    position: 'fixed',
    top: `${min(0, windowHeight + aboutHeight + projectHeight + skillsHeight - scrollTop)}px`,
    left: `clamp(0%, ${100 + skillsPercentage}% ,100%)`,
  }
  const contactStyle = {
    position: 'fixed',
    top: `${min(windowHeight, windowHeight + aboutHeight + projectHeight + skillsHeight + visionHeight - scrollTop)}px`,
  }

  const fillerStyle2 = {
    height: heroHeight + aboutHeight + projectHeight + skillsHeight + visionHeight + contactHeight + 'px',
  }
  return (
    <div className="App">
      {/* {loader && <Loader />} */}
      <Loader />
      <Cursor />

      <Hero scrollTop={scrollTop} style={heroStyle} handleHeight={setHeroHeight} />

      <About scrollTop={scrollTop} style={aboutStyle} handleHeight={setAboutHeight} />

      <ProjectSection scrollTop={scrollTop} style={projectsStyle} handleHeight={setProjectHeight} />

      <Skills style={skillsStyle} />

      <Vision style={visionStyle} />


      <Contact scrollTop={scrollTop} style={contactStyle} handleHeight={setContactHeight} />
      <div style={fillerStyle2} />


      {/* <TransitionSpace height={200} rotate={180} /> */}
      {/* <Hero scrollTop={scrollTop} style={{ zIndex: '100', position: 'fixed', top: '0', left: `clamp(-100%, calc(0% - ${scrollTop}px), 0%)` }} /> */}
      {/* <About scrollTop={scrollTop} style={{ zIndex: '100', position: 'fixed', top: '0', left: `clamp(0%, calc(70% - ${scrollTop}px), 70%)` }} /> */}
      {/* <TransitionSpace height={500} rotate={180} /> */}
      {/* <TransitionSpace height={500} rotate={180} /> */}
    </div>
  );
}

export default App;
