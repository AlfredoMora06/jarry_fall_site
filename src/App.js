import { Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import Work from "./views/Work"
import About from "./views/About"
import Fun from "./views/Fun"
import SingleProject from "./views/SingleProject"


function App() {
  return (
    <>
      <Routes>
        <Route path="/0/home" element={<Home />} />
        <Route path="/0/work" element={<Work />} />
        <Route path="/0/about" element={<About />} />
        <Route path="/0/fun" element={<Fun />} />
        <Route path="/0/projects/:project_name" element={<SingleProject />} />
        <Route path="*" element={<Home to="/0/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
