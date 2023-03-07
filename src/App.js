import { useState } from "react";
import { motion as m } from "framer-motion"
import About from "./components/About";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  const [selectedPage, setSelectedPage] = useState('HOME')

  return (
    <div>
      <Navbar />
      <Aside />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
