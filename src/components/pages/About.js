import React from "react";
import headshot from "../../assets/images/new-me.jpeg";

const About = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center mb-5 mt-5 container">
      <div className="align-items-center">
        <img className="img-fluid headshot" src={headshot} alt="headshot"></img>
      </div>

      <div className="about-text">
        <p>
          After years as a professional journalist writing stories for
          publications like D Magazine, Texas Monthly, and Southwest: The
          Magazine, I decided that I wanted to learn to write code. Because
          what’s a bigger story than tech?
        </p>
        <p>
          Getting into software engineering has felt less like a career change
          than the natural next step for me. Curiosity, self-reliance, and grit are
          fundamental to both journalism and programming. I'm a lifelong
          learner, and there's always something new to learn in web development.
          I have an upbeat attitude and embrace collaboration. Oh, and
          I am well-versed in Googling things.
        </p>
        <p>
          I have a bachelor’s degree from the University of North Texas and I'm
          working on a web development certification from Southern Methodist
          University. I live in Dallas, but am open to remote work.
        </p>
        <p>
          That's the professional me. In my free time, I also love to read, go
          to the movies, try new restaurants with my wife, and ride my bike all
          over the city. In 2022, I'm listening to the complete discography (including live albums) of the Grateful Dead. What a long strange trip it's been.
        </p>
      </div>
    </div>
  );
};

export default About;