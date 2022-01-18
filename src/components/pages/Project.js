import React from "react";
import exquisiteImg from "./../../assets/images/exquisite-corpse.png";
import taskImg from "./../../assets/images/task.png";
import budgetImg from "./../../assets/images/budget-ballin.png";
import booksImg from "./../../assets/images/books.png";
import notesImg from "./../../assets/images/notes.png";
import weatherImg from "./../../assets/images/weather.png";

const Card = ({title, viewLink, imgLink, text, codeLink}) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="mx-auto">
        <div className="d-flex h-100 w-100">
          <div>
            <h2 align="center">{title}</h2>
            <a target="_blank" href={viewLink}>
            <img className="img-fluid project-img" src={imgLink}></img>
            </a>
            <p align="center">
              {text}
            <p>
              <ul className="list-unstyled list-inline text-center">
                <a
                  className="project-links"
                  href={codeLink}
                  target="_blank"
                >
                  <li>
                    {" "}
                    <i className="fas fa-code fa-2x"> </i>
                  </li>
                </a>
              </ul>
            </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Project = () => {
  return (
    <div className="container project-container">
      <div className="row justify-content-center">
        <Card 
          title="Exquisite Corpse"
          viewLink="https://exqu-game.herokuapp.com/"
          imgLink={exquisiteImg}
          text="Play a collaborative poetry game with this full stack web app.
                  Sign up for an account or login with the email
                  'raven214@hotmail.com' and password 'password12345'"
          codeLink="https://github.com/alexdmacon/exquisite-corpse"
        />
        <Card 
          title="Task.mp4"
          viewLink="https://alexdmacon.github.io/task-mp3/"
          imgLink={taskImg}
          text="A web app that uses third-party APIs to generate an activity
                  recommendation and “how to” video based on user input."
          codeLink="https://github.com/alexdmacon/task-mp3"
        />
        <Card 
          title="Ballin' on Budget"
          viewLink="https://aqueous-ravine-17872.herokuapp.com/"
          imgLink={budgetImg}
          text="Keep tabs on your spending with this budget tracker app built
                  with MongoDB and JavaScript and using a RESTful API."
          codeLink="https://github.com/alexdmacon/ballin-on-budget"
        />
      </div>
      <div className="row justify-content-center">
        <Card 
          title="Books 'R Us"
          viewLink="https://peaceful-shore-50805.herokuapp.com/"
          imgLink={booksImg}
          text="Using with the Google Books API, search for new books and save
          favorites to your library (a MongoDB database) via a GraphQL
          API. Front-end built with React."
          codeLink="https://github.com/alexdmacon/books-r-us"
        />
        <Card 
          title="The Note Taker"
          viewLink="https://github.com/alexdmacon/note-taker"
          imgLink={notesImg}
          text=" Write and save notes to LocalStorage using Express and
          Node.js."
          codeLink="https://github.com/alexdmacon/note-taker"
        />
        <Card 
          title="Weather Dashboard"
          viewLink="https://alexdmacon.github.io/weather-dashboard/"
          imgLink={weatherImg}
          text=" Using the Open Weather API, get a current and 5-day weather
          forecast for any city you search."
          codeLink="https://github.com/alexdmacon/weather-dashboard"
        />
      </div>
    </div>
  );
};

export default Project;