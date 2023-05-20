
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import './reset.css'
import Loader from './Loader';
import Hero from './Hero';
import About from './About';
import TransitionSpace from './TransitionSpace';
import ProjectSection from './ProjectSection';
import Contact from './Contact';

function App() {
  const loader = new URLSearchParams(useLocation().search).get('load') != 'fast'
  return (
    <div className="App">
      {
        loader &&
        <Loader />
      }

      <Hero />
      <TransitionSpace height={500} rotate={180} />
      <About />
      <TransitionSpace height={500} />
      <ProjectSection />
      <TransitionSpace height={500} rotate={180} />
      <Contact />
    </div>
  );
}

export default App;
