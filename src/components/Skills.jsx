import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export class Skills extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }

  render() {
    return (
      <div className="skills-container">
        <div className="three-container">
          <div className="container-div" data-aos="fade-right">
            <h2>Soft-skills</h2>
            <h4>Fast learner</h4>
            <h4>Cooperative</h4>
            <h4>Curious</h4>
            <h4>Team-player</h4>
            <h4>Punctual</h4>
            <h4>Patient</h4>
            <h4>Perseverent</h4>
          </div>
          <div className="container-div" data-aos="fade-up">
            <div className="tech-skills">
              <h2>Technical-skills</h2>
              <div className="text-icon">
                <h4 className="skill-text">HTML</h4>
                <FontAwesomeIcon className="fa-3x html5" icon={faHtml5} />
              </div>
              <div className="text-icon">
                <h4 className="skill-text">CSS</h4>
                <FontAwesomeIcon className="fa-3x css" icon={faCss3} />
              </div>
              <div className="text-icon">
                <h4 className="skill-text">Javascript</h4>
                <FontAwesomeIcon className="fa-3x javascript" icon={faJs} />
              </div>
              <div className="text-icon">
                <h4 className="skill-text">ReactJS</h4>
                <FontAwesomeIcon className="fa-3x react" icon={faReact} />
              </div>
              <div className="text-icon">
                <h4 className="skill-text">Github</h4>
                <FontAwesomeIcon className="fa-3x github" icon={faGithub} />
              </div>
            </div>
          </div>
          <div className="container-div" data-aos="fade-left">
            <h2>Languages</h2>
            <h4>English</h4>
            <ProgressBar
              completed={70}
              bgColor={"#4194CF"}
              borderRadius={"10px"}
            />
            <h4>Romanian</h4>
            <ProgressBar
              completed={85}
              bgColor={"#4194CF"}
              borderRadius={"10px"}
            />
            <h4>Hungarian</h4>
            <ProgressBar
              completed={95}
              bgColor={"#4194CF"}
              borderRadius={"10px"}
            />
          </div>
        </div>
      </div>
    );
  }
}
