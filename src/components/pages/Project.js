import React from "react";
import exquisiteImg from "./../../assets/images/exquisite-corpse.png";
import taskImg from "./../../assets/images/task.png";
import budgetImg from "./../../assets/images/budget-ballin.png";
import booksImg from "./../../assets/images/books.png";
import notesImg from "./../../assets/images/notes.png";
import weatherImg from "./../../assets/images/weather.png";

const Project = () => {
  return (
    <div className="container project-container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-5 project">
          <div className="mx-auto">
            <div className="d-flex h-100 w-100">
              <div>
                <h2 align="center">Exquisite Corpse</h2>
                <a target="_blank" href="https://exqu-game.herokuapp.com/">
                <img className="img-fluid project-img" src={exquisiteImg}></img>
                </a>
                <p align="center">
                  Play a collaborative poetry game with this full stack web app.
                  Sign up for an account or login with the email
                  "raven214@hotmail.com" and password "password12345".
                <p>
                  <ul className="list-unstyled list-inline text-center">
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/exquisite-corpse"
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

        <div className="col-md-6 col-lg-4 mb-5">
          <div className="mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
              <div>
                <h2 align="center">Task.mp4</h2>
                <a target="_blank" href="https://alexdmacon.github.io/task-mp3/">
                <img className="img-fluid project-img" src={taskImg}></img>
                </a>
                <p align="center">
                  A web app that uses third-party APIs to generate an activity
                  recommendation and “how to” video based on user input.
                </p>
                <p>
                  <ul className="list-unstyled list-inline text-center">
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/task-mp3"
                      target="_blank"
                    >
                      <li>
                        {" "}
                        <i className="fas fa-code fa-2x"> </i>
                      </li>
                    </a>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
              <div>
                <h2 align="center">Ballin' on Budget</h2>
                <a target="_blank" href="https://aqueous-ravine-17872.herokuapp.com/">
                <img className="img-fluid project-img" src={budgetImg}></img>
                </a>
                <p align="center">
                  Keep tabs on your spending with this budget tracker app built
                  with MongoDB and JavaScript and using a RESTful API.
                </p>
                <p>
                  <ul className="list-unstyled list-inline text-center">
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/ballin-on-budget"
                      target="_blank"
                    >
                      <li>
                        {" "}
                        <i className="fas fa-code fa-2x"> </i>
                      </li>
                    </a>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-5 project">
          <div className="mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
              <div>
                <h2 align="center">Books 'R Us</h2>
                <a target="_blank" href="https://peaceful-shore-50805.herokuapp.com/">
                <img className="img-fluid project-img" src={booksImg}></img>
                </a>
                <p align="center">
                  Using with the Google Books API, search for new books and save
                  favorites to your library (a MongoDB database) via a GraphQL
                  API. Front-end built with React.
                </p>
                <p>
                  <ul className="list-unstyled list-inline text-center">
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/books-r-us"
                      target="_blank"
                    >
                      <li>
                        {" "}
                        <i className="fas fa-code fa-2x"> </i>
                      </li>
                    </a>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <div className="mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
              <div>
                <h2 align="center">The Note Taker</h2>
                <a target="_blank" href="https://github.com/alexdmacon/note-taker">
                <img className="img-fluid project-img" src={notesImg}></img>
                </a>
                <p align="center">
                  Write and save notes to LocalStorage using Express and
                  Node.js.
                </p>
                <p>
                  <ul className="list-unstyled list-inline text-center">
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/note-taker"
                      target="_blank"
                    >
                      <li>
                        {" "}
                        <i className="fas fa-code fa-2x"> </i>
                      </li>
                    </a>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
              <div>
                <h2 align="center">Weather Dashboard</h2>
                <a target="_blank" href="https://alexdmacon.github.io/weather-dashboard/">
                <img className="img-fluid project-img" src={weatherImg}></img>
                </a>
                <p align="center">
                  Using the Open Weather API, get a current and 5-day weather
                  forecast for any city you search.
                </p>
                <p>
                  <ul className="list-unstyled list-inline text-center">
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/weather-dashboard"
                      target="_blank"
                    >
                      <li>
                        {" "}
                        <i className="fas fa-code fa-2x"> </i>
                      </li>
                    </a>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
