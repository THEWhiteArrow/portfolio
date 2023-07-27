
import { useEffect, useState } from 'react';


import MainPage from './components/MainPage';
import Cursor from './components/Cursor'; 
type GlobalState = {
  windowWidth: number
}

function App() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  
  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth)
      console.log(windowWidth) 
    }
    window.addEventListener('resize', onResize); 
  }, [windowWidth]);



  return (
    <div className="App text-black">
      <Cursor />
      <MainPage windowWidth={windowWidth} />

    </div>
  );
}

export type { GlobalState };
export default App;
