import "./EducationExp.css";
import cnsLogo from "./cnslogo.jpg";
import utcnLogo from "./utcnlogo.jpg";
import scitLogo from "./scitlogo.jpg";
import { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class EducationExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility1: false,
      visibility2: false,
      visibility3: false,
      visibility4: false,
      visibility5: false,
      visibilityBitEngine: false,
      visibilitySolf: false,
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }

  toggleVisibility1 = () => {
    this.setState({
      visibility1: !this.state.visibility1,
    });
  };

  toggleVisibility2 = () => {
    this.setState({
      visibility2: !this.state.visibility2,
    });
  };

  toggleVisibility3 = () => {
    this.setState({
      visibility3: !this.state.visibility3,
    });
  };

  toggleVisibility4 = () => {
    this.setState({
      visibility4: !this.state.visibility4,
    });
  };

  toggleVisibility5 = () => {
    this.setState({
      visibility5: !this.state.visibility5,
    });
  };

  toggleVisibilityBitEngine = () => {
    this.setState({
      visibilityBitEngine: !this.state.visibilityBitEngine,
    });
  };

  toggleVisibilitySolf = () => {
    this.setState({
      visibilitySolf: !this.state.visibilitySolf,
    });
  };

  render() {
    return (
      <div className="edu-container">
        <div className="container1" data-aos="fade-right">
          <h2>Education</h2>
          <h4 className="first-year">
            2011-2015 High-school{" "}
            {this.state.visibility1 ? (
              <FontAwesomeIcon
                onClick={this.toggleVisibility1}
                className="fa-1x dropup"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={this.toggleVisibility1}
                className="fa-1x dropdown"
                icon={faChevronDown}
              />
            )}
          </h4>
          {this.state.visibility1 ? (
            <div>
              <img src={cnsLogo} alt="cnslogo" className="cnslogo" />
              <h5>Colegiul Național Silvania, Zalău</h5>
            </div>
          ) : (
            ""
          )}

          <h4 className="second-year">
            2015-2019 University{" "}
            {this.state.visibility2 ? (
              <FontAwesomeIcon
                onClick={this.toggleVisibility2}
                className="fa-1x dropup"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={this.toggleVisibility2}
                className="fa-1x dropdown"
                icon={faChevronDown}
              />
            )}
          </h4>
          {this.state.visibility2 ? (
            <div>
              <img src={utcnLogo} alt="utcnlogo" className="utcnlogo" />
              <h5>Technical University of Cluj-Napoca</h5>
              <p>
                Engineering diploma in Land Measurements and Cadastre, Faculty
                of Civil Engineering{" "}
              </p>
            </div>
          ) : (
            ""
          )}
          <h4 className="third-year">
            2021 Jan-Jun Course{" "}
            {this.state.visibility3 ? (
              <FontAwesomeIcon
                onClick={this.toggleVisibility3}
                className="fa-1x dropup"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={this.toggleVisibility3}
                className="fa-1x dropdown"
                icon={faChevronDown}
              />
            )}
          </h4>
          {this.state.visibility3 ? (
            <div>
              <img src={scitLogo} alt="scitlogo" className="scitlogo" />
              <h5>Școala Informală de IT</h5>
              <p>Front-end Web-development course </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="container2" data-aos="fade-left">
          <h2>Experience</h2>
          <h4>2022 May - present</h4>
          <h5 className="job-experience">
            Full stack web developer - Solf IT
            {this.state.visibilitySolf ? (
              <FontAwesomeIcon
                onClick={this.toggleVisibilitySolf}
                className="fa-1x dropup"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={this.toggleVisibilitySolf}
                className="fa-1x dropdown"
                icon={faChevronDown}
              />
            )}
          </h5>
          {this.state.visibilitySolf ? (
            <div>
              <h6>
                <p>
                  Analyzing product backlogs to be divided in smaller UI and
                  backend tasks
                </p>
                <p>
                  Developing and implementing new features for web-based
                  applications
                </p>{" "}
                <p>Debugging to resolve technical issues</p>{" "}
                <p>Collaborating with other developers on team projects</p>{" "}
                <p>
                  Used and gained experience in version control systems, ex.
                  Azure DevOps
                </p>{" "}
                <p>
                  Starting from March 2023, I am working also on the back-end
                  side of the projects with technologies like C# - .NET
                  framework, using SQL database
                </p>
                <p>
                  Worked on team projects like a web-application where the users
                  can manage their travel information related to work, filling
                  in their travel-preferences, being able to access every detail
                  about their trip, seeing every expense they have
                </p>
                <p>
                  Worked on a web-app where the managers can preselect,
                  nominate, take actions/notes and choose high potential users
                  based on a multitude of factors and informations
                </p>
                <p>
                  Worked on a resource managment app where the project managers
                  can assign resources on different projects and the subsequent
                  tasks, having a schedule where they can write the time
                  assigned on a task for each user
                </p>
                <p>
                  Also worked with logic apps, power apps and sharepoint lists,
                  integrating automated workflows
                </p>
              </h6>
            </div>
          ) : (
            ""
          )}
          <h4>2022 Feb - 2022 May</h4>
          <h5 className="job-experience">
            Internship/Assistant programmer - BitEngine Development
            {this.state.visibilityBitEngine ? (
              <FontAwesomeIcon
                onClick={this.toggleVisibilityBitEngine}
                className="fa-1x dropup"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={this.toggleVisibilityBitEngine}
                className="fa-1x dropdown"
                icon={faChevronDown}
              />
            )}
          </h5>
          {this.state.visibilityBitEngine ? (
            <div>
              <h6>
                <p>
                  I mostly was working on the styling of the presentation page
                  of our project in AngularJS, CSS. In addition I did some
                  styling also on the mobile and web view of the application,
                  which was done with Flutter (Dart)
                </p>
                <p>
                  I had some contribution to the back-end development of both
                  the presentation page and application with the help of
                  Javascript and Node.js
                </p>{" "}
              </h6>
            </div>
          ) : (
            ""
          )}
          <h4>2019 Oct - 2020 Nov</h4>
          <h5 className="job-experience">
            Topograph/Geodetic engineer - Global Topo SRL
            {this.state.visibility4 ? (
              <FontAwesomeIcon
                onClick={this.toggleVisibility4}
                className="fa-1x dropup"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={this.toggleVisibility4}
                className="fa-1x dropdown"
                icon={faChevronDown}
              />
            )}
          </h5>
          {this.state.visibility4 ? (
            <div>
              <h6>
                <p>
                  Followed local, regional and national guidelines for land
                  surveying
                </p>
                <p>Performed field calculations to complete assessments</p>{" "}
                <p>
                  Measured and marked property lines and key topographic
                  features
                </p>{" "}
                <p>
                  Completed complex technical surveys for development of
                  roadway, intersection and bridge construction plans
                </p>{" "}
                <p>
                  Read and used topographical data to complete analysis of land
                  plots and roadways
                </p>{" "}
                <p>
                  Set up precise measurement and control equipment, including
                  GPS and Total-stations
                </p>
              </h6>
            </div>
          ) : (
            ""
          )}

          <h4>2021 Jan-Jun</h4>
          <h5>
            Front-End Web-Dev course experience
            {this.state.visibility5 ? (
              <FontAwesomeIcon
                onClick={this.toggleVisibility5}
                className="fa-1x dropup"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={this.toggleVisibility5}
                className="fa-1x dropdown"
                icon={faChevronDown}
              />
            )}
          </h5>

          {this.state.visibility5 ? (
            <div>
              <h6>
                I have attended 5 month course at the informal School of IT and
                I’ve learned Web development concepts such as HTML5, CSS3,
                JavaScript (ECMAScript6 OOP concepts,variables, primitive types,
                AJAX, API, functions, hoisting, DOM ) and ReactJS. I’ve acquired
                knowledge in how to build a responsive, functional website. We
                had weekly projects which where meant to improve our knowledge
                and practice. We also learned about Github basic principles and
                commands. We had a final project, where we had to make our
                single-page-app online CV. The project can be found on my GitHub
                page and also there is a link in the contact section for it.
              </h6>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
