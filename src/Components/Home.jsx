// Home.jsx
import React from "react";
import { Element } from "react-scroll";
import "../App.css";
import "./Home.css"
import { scroller } from "react-scroll";
function Home() {
  

  //function for view my work 
  const HandelViewWork=()=>{
    scroller.scrollTo("projects",{
      smooth:true,
      duration:500
    });
  }
  return (
    <Element name="home" className="section home-section">
      <div className="home-content">
        <h1>Hello, I'm Preethika</h1>
        <h3>Junior Web Developer | Front End Developer</h3>

        <p>Front-End Developer focused on building responsive and user-friendly web interfaces. 
        Skilled in modern web technologies and passionate 
        about creating smooth digital experiences.</p>

        <button className="work"  onClick={HandelViewWork}>View my Work </button>
       
      </div>

      <div className="profile-pic">
        <img src="./public/Image/ProfilePic.png" alt="PIC OF PREETHIKA" />
      </div>
    </Element>
  );
}

export default Home;