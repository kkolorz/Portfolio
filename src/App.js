import { useState } from "react";
import About from "./components/About";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState('HOME')

  return (
    <div>
      <Navbar />
      <Aside />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
