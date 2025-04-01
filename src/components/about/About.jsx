import React from "react";
import "./about.css";
import { motion } from "framer-motion"; // If you're not using motion, you can remove this import.

const About = () => {
  return (
    <div className="about_container">
      <img src="./images/me.png" alt="Lazarr Johnson" /> {/* Added alt text for accessibility */}
      <div className="flex-contain">
        <div className="about_info">
          <h3>About Me</h3>
          <p>
            My name is Lazarr Johnson, a recent graduate from the University of
            Illinois Urbana Champaign. I received a Bachelor's in Graphic Design
            with a double minor in Computer Science and Information Science. I am
            a member of Omega Psi Phi Fraternity, Inc. and held the position
            of chapter president while in undergrad. Some of my passions include:
            Art, Tech, Fitness, and Health. When I'm not creating graphics or
            programming, I enjoy boxing, reading, and spending time with my dog.
          </p>
          <h4>Languages</h4>
          <p>English - Spanish</p>
          <h4>Programming Languages</h4>
          <p>
            Python - JavaScript - HTML/CSS - React - Redux - Node.js - Express.js - PostgreSQL - Git - C++
          </p>
          <h4>Skills</h4>
          <p>
            Adobe Creative Suite - VS Code - Github - Data Structures & Algorithms (Python) - Brand Management - Communications
          </p>
          <br></br>
          <a
          href="/images/LazarrJnp_resume.pdf" // Reference the file directly from the public folder
          download="Lazarr_Johnson_Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="dwnld_btn">Download My Resume</button>
        </a>
        </div>
      </div>
      {/* <footer className="about_foot">
        <h1>Notable Clients:</h1>
      </footer> */}
    </div>
  );
};

export default About;
