import MainPage from "./components/MainPage";
import Cursor from "./components/Cursor";
import MaintanancePage from "./components/MaintanancePage";
import ThankYouPage from "./components/ThankYouPage";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserView } from "react-device-detect";

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
      <BrowserView>
        <Cursor />
      </BrowserView>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage windowWidth={windowWidth} />} />
          <Route path="thank-you" element={<ThankYouPage />} />
          <Route path="project" element={<MaintanancePage />}>
            <Route index />
            <Route path=":projectId" />
          </Route>
          <Route path="skill" element={<MaintanancePage />}>
            <Route index />
            <Route path=":skillId" />
          </Route>

          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export type { GlobalState };
export default App;
