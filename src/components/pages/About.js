import React from "react";
import headshot from "../../assets/images/new-me.jpeg"


const About = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center mb-5">
      <div className="align-items-center">
        <img className="img-fluid" src={headshot} alt="headshot"></img>
      </div>

      <div className="flex-grow-1">
        <p>
          After years as a professional journalist writing about the day’s
          biggest stories, I decided that I wanted to learn to write code.
          Because what’s a bigger story than tech?
        </p>
        <p>
        Curiosity, self-reliance, and
          grit are fundamental to both journalism and programming. I have the
          tenacity and drive to figure out new problems, and I push myself to
          learn more every day. I have a positive, upbeat attitude and embrace
          collaboration. Oh, and I am well-versed in Googling things.
        </p>
        <p>
          I have a bachelor’s degree from the University of North Texas and I'm
          working on a web development certification from Southern Methodist
          University. I live in Dallas, but am open to remote work.
        </p>
            <p>That's the professional me. In my free time, I also love to read, go to the movies, try new restaurants with my wife, and ride my bike all over the city.</p>

      </div>
    </div>
  );
};

export default About;
