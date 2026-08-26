import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import WhatICanDo from "./Components/WhatICanDo";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import HowIWork from "./Components/HowIWork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Home />
        <WhatICanDo />
        <About />
        <Skills />
        <Projects />
        <HowIWork />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;