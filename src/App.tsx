
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

function App() {
  const loader = new URLSearchParams(useLocation().search).get('load') != 'fast'
  const [scrollTop, setScrollTop] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [projectHeight, setProjectHeight] = useState(0);

  const onScroll = (e: any) => {
    setScrollTop(Math.round(e.target.documentElement.scrollTop));
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);


  const heroPercentage = scrollTop / heroHeight * 100;
  const aboutPercentage = (scrollTop - heroHeight) / (aboutHeight) * 100;
  console.log(scrollTop, heroHeight, aboutHeight, projectHeight)

  const heroStyle = {
    zIndex: 100,
    position: 'fixed',
    left: `clamp(-100%, -${heroPercentage}%, 0%)`
  }
  const aboutStyle = {
    zIndex: 100,
    position: 'fixed',
    left: `clamp(0%, ${70 - heroPercentage}%, 70%)`,
    top: `clamp(-100%, ${100 - heroPercentage}% , 0%)`,
    // top: `clamp(-100%, ${heroPercentage <= 100.0 ? '0%' : `${heroHeight - scrollTop}px`} , 0%)`
  }
  const projectsStyle = {
    zIndex: 100,
    position: 'fixed',
    top: `clamp(-100%, ${100 - aboutPercentage}% , 100%)`,
    // top: `clamp(-100%, ${heroPercentage <= 100.0 ? '0%' : `${heroHeight - scrollTop}px`} , 0%)`
  }

  const fillerStyle2 = {
    height: heroHeight + aboutHeight + projectHeight + 'px',
  }
  return (
    <div className="App">
      {loader && <Loader />}
      <Cursor />

      <Hero scrollTop={scrollTop} style={heroStyle} handleHeight={setHeroHeight} />

      <About scrollTop={scrollTop} style={aboutStyle} handleHeight={setAboutHeight} />

      <ProjectSection scrollTop={scrollTop} style={projectsStyle} handleHeight={setProjectHeight} />

      <div style={fillerStyle2} />

      <Contact />

      {/* <TransitionSpace height={200} rotate={180} /> */}
      {/* <Hero scrollTop={scrollTop} style={{ zIndex: '100', position: 'fixed', top: '0', left: `clamp(-100%, calc(0% - ${scrollTop}px), 0%)` }} /> */}
      {/* <About scrollTop={scrollTop} style={{ zIndex: '100', position: 'fixed', top: '0', left: `clamp(0%, calc(70% - ${scrollTop}px), 70%)` }} /> */}
      {/* <TransitionSpace height={500} rotate={180} /> */}
      {/* <TransitionSpace height={500} rotate={180} /> */}
    </div>
  );
}

export default App;
