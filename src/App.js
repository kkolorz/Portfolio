import { useState } from "react";
import About from "./components/About";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { motion as m } from "framer-motion"

function App() {
  const [selectedPage, setSelectedPage] = useState('HOME')

  return (
    <div>
      <Navbar />
      <Aside />
      <Home />
      <About />
    </div>
  );
}

export default App;
