import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="container resume-container">
        <h3>
        <a href="https://drive.google.com/file/d/1gU7ZsYze4bEanXvJjRZ4vBMjR2zyEMHq/view?usp=sharing" target="_blank" className="resume">
          See My Resume
        </a>
        </h3> 
      </div>
      <div>
        <h3>My technical proficiencies:</h3>
        <ul>
          <li>JavaScript, JQuery, and CSS</li>
          <li>Node.js, Express, MySQL, MongoDB</li>
          <li>Web APIs, GraphQL, Bootstrap, React.js</li>
        </ul>
        <h3>More stuff on professional experience etc. coming later</h3>
      </div>
    </div>
  );
};

export default Resume;
