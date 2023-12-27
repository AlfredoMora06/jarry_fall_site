import { Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import Work from "./views/Work"
import About from "./views/About"
import Fun from "./views/Fun"
import BeeSafe from "./views/BeeSafe"
import AfricanHopeCommittee from "./views/AfricanHopeCommittee"


function App() {
  return (
    <>
      <Routes>
        <Route path="/0/home" element={<Home />} />
        <Route path="/0/work" element={<Work />} />
        <Route path="/0/about" element={<About />} />
        <Route path="/0/fun" element={<Fun />} />
        <Route path="/0/projects/beesafe" element={<BeeSafe />} />
        <Route path="/0/projects/ahc" element={<AfricanHopeCommittee />} />
        <Route path="*" element={<Home to="/0/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
