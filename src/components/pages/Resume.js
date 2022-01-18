import React from "react";

const ResumeHeader = ({title}) => {
  return (
    <div className="col-lg-3">
      <h2>{title}</h2>
    </div>
  )
}

const Resume = () => {
  return (
    <div className="container resume-container mt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-9 d-flex flex-row-reverse">
          <h6><a className="resume-link" target="_blank" href="https://drive.google.com/file/d/1gU7ZsYze4bEanXvJjRZ4vBMjR2zyEMHq/view"><em>Download Full Resume</em></a></h6>
        </div>
      </div>
      <div className="row mt-3">
        <ResumeHeader title="Technologies & Tools" />
        <div className="col-lg-9" tech-item>
          <ul className="list-group list-group-horizontal flex-wrap text-center">
            <li>
              <i className="fab fa-js fa-5x"> </i>
            </li>
            <li>
              <i className="fab fa-react fa-5x"> </i>
            </li>
            <li>
              <i className="fab fa-node fa-5x"> </i>
            </li>
            <li>
              <i className="fab fa-css3-alt fa-5x"> </i>
            </li>
            <li>
              <i className="fab fa-git fa-5x"> </i>
            </li>
            <li>
              <i className="fab fa-bootstrap fa-5x"> </i>
            </li>
            <li>
              <i className="fas fa-database fa-5x"> </i>
            </li>
            <li>
              <i className="fab fa-html5 fa-5x"> </i>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <ResumeHeader title="Experience" />
        <div className="col-lg-9">
          <div className="experience-item">
            <h3>Senior Digital Editor at D Magazine</h3>
            <h5><em>03/2021-Present</em></h5>
            <p>
              Write a daily email newsletter for thousands of subscribers and
              edit content for dmagazine.com using several content management
              systems, including WordPress and HubSpot.
            </p>{" "}
            <p>
              Work with a team of journalists, designers, sales representatives,
              and marketing professionals to develop new editorial products,
              like a State Fair fried food tournament.
            </p>
            <p>
              Use tools like Google Analytics and the ChartBeat dashboard to
              generate reports on website user activity.
            </p>
          </div>
          <div className="experience-item">
            <h3>Editor at Pace Communications</h3>
            <h5><em>08/2018-03/2020</em></h5>
            <p>
              Managed and assigned tasks to interns, junior employees, and
              dozens of freelance contractors.
            </p>{" "}
            <p>
              Wrote and edited articles for the award-winning Southwest: The
              Magazine, the in-flight magazine of Southwest Airlines.
            </p>
            <p>
              Worked with a team creating successful new marketing initiatives
              for clients like Sysco and Gold’s Gym.
            </p>
          </div>
          <div className="experience-item">
            <h3>Online Managing Editor at D Magazine</h3>
            <h5><em>01/2015-08/2018</em></h5>
            <p>
              Promoted several times while serving in a variety of digital
              communications roles.
            </p>{" "}
            <p>Tripled web traffic to D Magazine’s entertainment vertical.</p>
            <p>
              Worked with a team of journalists and web developers during a
              major redesign of dmagazine.com.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <ResumeHeader title="Education" />
        <div className="col-lg-9">
          <div className="education-item">
            <h3>The University of North Texas</h3>
            <p>
              Bachelor of Arts, concentrations in Journalism, Anthropology, and
              Political Science
            </p>{" "}
          </div>
          <div className="experience-item">
            <h3>Southern Methodist University</h3>
            <p>Certification in full stack web development</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;