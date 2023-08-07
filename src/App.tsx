import MainPage from "./components/MainPage";
import Cursor from "./components/Cursor";
import MaintanancePage from "./components/MaintanancePage";
import ThankYouPage from "./components/ThankYouPage";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserView } from "react-device-detect";

type GlobalState = {
  projectsDisplayed: number;
  setProjectsDisplayed: React.Dispatch<React.SetStateAction<number>>;
};

function App() {
  let [navigateBack, setNavigateBack] = useState(false);
  let [projectsDisplayed, setProjectsDisplayed] = useState(3);

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
              <MainPage
                setNavigateBack={setNavigateBack}
                projectsDisplayed={projectsDisplayed}
                setProjectsDisplayed={setProjectsDisplayed}
              />
            }
          />
          <Route path="thank-you" element={<ThankYouPage />} />
          <Route
            path="project"
            element={<MaintanancePage navigateBack={navigateBack} />}
          >
            <Route index />
            <Route path=":projectId" />
          </Route>
          <Route
            path="skill"
            element={<MaintanancePage navigateBack={navigateBack} />}
          >
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
