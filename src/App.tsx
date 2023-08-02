import MainPage from "./components/MainPage";
import Cursor from "./components/Cursor";
import MaintanancePage from "./components/MaintanancePage";
import ThankYouPage from "./components/ThankYouPage";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserView } from "react-device-detect";

type GlobalState = {
  projects: { inLine: number; displayed: number };
  manageProjects: Function;
};

function App() {
  let [projects, setProjects] = useState({ inLine: 3, displayed: 3 });

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      const { inLine, displayed } = projects;
      if (width < 1024) {
        if (inLine !== 1) setProjects({ inLine: 1, displayed });
      } else if (width < 1280) {
        if (inLine !== 2) setProjects({ inLine: 2, displayed });
      } else if (width < 1536) {
        if (inLine !== 3) setProjects({ inLine: 3, displayed });
      }
    };
    window.addEventListener("resize", onResize);
  }, [projects]);
  const manageProjects = (change: number) => {
    const { inLine, displayed } = projects;
    setProjects({ inLine, displayed: displayed + change * inLine });
  };
  return (
    <div className="App text-black">
      <BrowserView>
        <Cursor />
      </BrowserView>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <MainPage projects={projects} manageProjects={manageProjects} />
            }
          />
          <Route path="thank-you" element={<ThankYouPage />} />
          <Route
            path="project"
            element={<MaintanancePage backTo="/#projects" />}
          >
            <Route index />
            <Route path=":projectId" />
          </Route>
          <Route path="skill" element={<MaintanancePage backTo="/#skills" />}>
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
