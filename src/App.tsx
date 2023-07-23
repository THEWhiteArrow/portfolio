
import { useEffect, useRef, useState } from 'react';


import MainPage from './components/MainPage';
import Cursor from './components/Cursor';

function App() {
  const onResize = (e: any) => {
    console.log(window.innerWidth)
  }


  useEffect(() => {
    window.addEventListener('resize', onResize);
  }, []);



  return (
    <div className="App">
      <Cursor />
      <MainPage />
    </div>
  );
}

export default App;
