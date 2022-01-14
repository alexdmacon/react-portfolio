import React from "react";
import exquisiteImg from "./../../assets/images/exquisite-corpse.png";
import taskImg from "./../../assets/images/task.png";
import budgetImg from "./../../assets/images/budget-ballin.png";
import booksImg from "./../../assets/images/books.png"
import notesImg from "./../../assets/images/notes.png"
import weatherImg from "./../../assets/images/weather.png"

const Project = () => {
  return (
    <div className="container project-container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-5 project">
          <div className="mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
              <div>
                <h2>Exquisite Corpse</h2>
                <img className="img-fluid" src={exquisiteImg}></img>
                <p>
                  Play a collaborative poetry game with this full stack web app.
                  Sign up for an account or login with the email
                  "raven214@hotmail.com" and password "password12345".
                </p>
                <p>
                  <ul>
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/exquisite-corpse"
                    >
                      <li>GitHub Repository</li>
                    </a>
                    <a
                      className="project-links"
                      href="https://exqu-game.herokuapp.com"
                    >
                      <li>Deployed</li>
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
                <h2>Task.mp4</h2>
                <img className="img-fluid" src={taskImg}></img>
                <p>
                  A web app that uses third-party APIs to generate an activity
                  recommendation and “how to” video based on user input.
                </p>
                <p>
                  <ul>
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/task-mp3"
                    >
                      <li>GitHub Repository</li>
                    </a>
                    <a
                      className="project-links"
                      href="https://alexdmacon.github.io/task-mp3/"
                    >
                      <li>Deployed</li>
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
                <h2>Ballin' on Budget</h2>
                <img className="img-fluid" src={budgetImg}></img>
                <p>
                  Keep tabs on your spending with this budget tracker app built
                  with MongoDB and JavaScript and using a RESTful API.
                </p>
                <p>
                  <ul>
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/ballin-on-budget"
                    >
                      <li>GitHub Repository</li>
                    </a>
                    <a
                      className="project-links"
                      href="https://aqueous-ravine-17872.herokuapp.com/"
                    >
                      <li>Deployed</li>
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
                <h2>Books 'R Us</h2>
                <img className="img-fluid" src={booksImg}></img>
                <p>
                  Using with the Google Books API, search for new books and save favorites to your library (a MongoDB database) via a GraphQL API. Front-end built with React.
                </p>
                <p>
                  <ul>
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/books-r-us"
                    >
                      <li>GitHub Repository</li>
                    </a>
                    <a
                      className="project-links"
                      href="https://peaceful-shore-50805.herokuapp.com/"
                    >
                      <li>Deployed</li>
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
                <h2>The Note Taker</h2>
                <img className="img-fluid" src={notesImg}></img>
                <p>
                  Write and save notes to LocalStorage using Express and Node.js.
                </p>
                <p>
                  <ul>
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/note-taker"
                    >
                      <li>GitHub Repository</li>
                    </a>
                    <a
                      className="project-links"
                      href="https://powerful-spire-74312.herokuapp.com/"
                    >
                      <li>Deployed</li>
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
                <h2>Weather Dashboard</h2>
                <img className="img-fluid" src={weatherImg}></img>
                <p>
                  Using the Open Weather API, get a current and 5-day weather forecast for any city you search.
                </p>
                <p>
                  <ul>
                    <a
                      className="project-links"
                      href="https://github.com/alexdmacon/weather-dashboard"
                    >
                      <li>GitHub Repository</li>
                    </a>
                    <a
                      className="project-links"
                      href="https://alexdmacon.github.io/weather-dashboard/"
                    >
                      <li>Deployed</li>
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
