
import { useEffect, useRef, useState } from 'react';


import MainPage from './components/MainPage';
import Cursor from './components/Cursor';

type GlobalState = {
  windowWidth: number
}

function App() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const onResize = (e: any) => {
    setWindowWidth(window.innerWidth)
    console.log(windowWidth)
  }


  useEffect(() => {
    window.addEventListener('resize', onResize);
  }, []);



  return (
    <div className="App text-black">
      <Cursor />
      <MainPage windowWidth={windowWidth} />

    </div>
  );
}

export type { GlobalState };
export default App;
