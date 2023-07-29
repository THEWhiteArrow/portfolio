import { useEffect, useState } from "react";

import MainPage from "./components/MainPage";
import Cursor from "./components/Cursor";
import { Routes, Route } from "react-router-dom";
import MaintanancePage from "./components/MaintanancePage";
type GlobalState = {
  windowWidth: number;
};

function App() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    };
    window.addEventListener("resize", onResize);
  }, [windowWidth]);

  return (
    <div className="App text-black">
      <Cursor />
      <Routes>
        <Route path="/" element={<MainPage windowWidth={windowWidth} />} />
        <Route path="/project/:projectId" element={<MaintanancePage />} />
        <Route path="/skill/:skillId" element={<MaintanancePage />} />
      </Routes>
    </div>
  );
}

export type { GlobalState };
export default App;
