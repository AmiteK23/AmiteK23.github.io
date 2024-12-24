import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2>Technologies I Know</h2>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript, HTML, CSS</li>
        <li>Material-UI</li>
        <li>ReactJS</li>
        <li>TypeScript</li>
        <li>NodeJS</li>
        <li>ChartJS</li>
        <li>ThreeJS</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Wanna learn next: MATLAB</li>
      </ul>
      <h2>Projects:</h2>
      <ul>
        <li>
          <a
            href="https://my-crypto-app-jet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crypto App
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
