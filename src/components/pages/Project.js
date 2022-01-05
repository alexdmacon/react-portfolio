import React from "react";
import exquisiteImg from "./../../assets/images/exquisite.png";
import taskImg from "./../../assets/images/taskmp4.png";
import budgetImg from "./../../assets/images/budget.png";

const Project = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="mx-auto">
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
              <div>
                <h2>Exquisite Corpse</h2>
                <img className="img-fluid" src={exquisiteImg}></img>
                <p>
                  A full-stack web app with user authentication that invites
                  users to play a collaborative poetry game. To test, either
                  sign up for an account or login with the email
                  "raven214@hotmail.com" and password "password12345".
                </p>
                <p>
                  <ul>
                    <a href="https://github.com/alexdmacon/task-mp3"><li>GitHub Repository</li></a>
                    <a href="https://exqu-game.herokuapp.com"><li>Deployed</li></a>
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
                  recommendation and accompanying “how to” video based on user
                  input.
                </p>
                <p>
                  <ul>
                <a href="https://github.com/alexdmacon/task-mp3"><li>GitHub Repository</li></a>
                <a href="https://alexdmacon.github.io/task-mp3/"><li>Deployed</li></a>
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
                  Keep track of your budget with this app built with MongoDB and
                  JavaScript.
                </p>
                <p>
                <ul>
                <a href="https://github.com/alexdmacon/ballin-on-budget"><li>GitHub Repository</li></a>
                <a href="https://aqueous-ravine-17872.herokuapp.com/"><li>Deployed</li></a>
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
