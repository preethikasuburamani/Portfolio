// App.jsx
import React from "react";
import "./App.css"
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;