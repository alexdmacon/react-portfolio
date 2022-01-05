import React from "react";
import headshot from "../../assets/images/new-me.jpeg"

const About = () => {
  return (
    <div className="row">
      <div class="col-4">
        <h2>About Me</h2>
        <img className="headshot" src={headshot} alt="headshot"></img>
      </div>

      <div class="col-8">
        <p>
          After years as a professional journalist writing about the day’s
          biggest stories, I decided that I wanted to learn to write code.
          Because what’s a bigger story than tech?
        </p>
        <p>
          Now I am a full-stack developer seeking full-time employment in the
          field. This is less of a career change than the logical next step for
          me. I’ve always sought out challenges. Curiosity, self-reliance, and
          grit are fundamental to both journalism and programming. I have the
          tenacity and drive to figure out new problems, and I push myself to
          learn more every day. I have a positive, upbeat attitude and embrace
          collaboration. Oh, and I am well-versed in Googling things.
        </p>
        <p>
          I have a bachelor’s degree from the University of North Texas and I'm
          working on a web development certification from Southern Methodist
          University. I live in Dallas, but am open to remote work. I have
          experience developing full-stack applications with the following
          technologies:
        </p>
            <ul>
            <li>JavaScript, JQuery, and CSS</li>
            <li>Node.js, Express, MySQL, MongoDB</li>
            <li>Web APIs, GraphQL, Bootstrap, React.js</li>
            </ul>

            <p>That's the professional me. In my free time, I also love to read, go to the movies, try new restaurants with my wife, and ride my bike all over the city.</p>

      </div>
    </div>
  );
};

export default About;
