import avatarPic from "./avatar.jpg";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import DarocziIstvanResume from "./DarocziIstvan-CV.pdf";
import Typed from "react-typed";
import { Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export class AboutMe extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }

  render() {
    return (
      <div className="app-aboutme">
        <div className="page-container">
          <img src={avatarPic} alt="avatar" className="avatar-pic" />
          <div className="aboutme-div">
            <Typography
              className="h1-header"
              style={{ color: "black", fontFamily: "DM Sans" }}
              variant="h4"
            >
              <Typed strings={["Daróczi István"]} typeSpeed={60}></Typed>
            </Typography>
            <Typography
              className="h3-header"
              style={{ color: "black", fontFamily: "DM Sans" }}
              variant="h5"
            >
              <Typed
                strings={[" Junior Front-End Developer", "Web Designer"]}
                typeSpeed={40}
                backSpeed={40}
                loop
              />
            </Typography>
            <div className="aboutme" data-aos="fade-right">
              <h2 className="text"> About me </h2>
              <p className="para-text">
                Hello, my name is Isti and welcome to my website! I am a
                software developer working with modern web technologies,
                enthusiastic about collaborating in a team environment. I am a
                flexible person who can easily adapt in new environments. My
                patience and ambition helps me complete all my tasks. I am eager
                to learn new technologies and grow professionally, seeking to
                find challenges that would help me improve my knowledge. In
                order to achieve these goals, I believe that my teamwork and
                communication skills come in handy. If you want to get in touch
                you can find me in{" "}
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  Contact{" "}
                </Link>
                menupoint.
              </p>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="hobbies" data-aos="fade-left">
            <h2 className="text">Hobbies</h2>
            <p className="para-text">
              In my free time I enjoy to read articles, books and watch videos
              about the new technologies, about my curiosities(things/devices
              principle of operation) and obviously for entertainment purposes.
              Furthermore I like to spend time in the nature and to visit new
              places, cultures. So my hobby is to explore and to understand the
              world I'm surrounded by.
            </p>
          </div>
          <hr className="horizontal-line" />
          <div className="resume" data-aos="fade-up">
            <p> Download my resume:</p>
            <a href={DarocziIstvanResume} download={DarocziIstvanResume}>
              <FontAwesomeIcon className="fa-4x gitHub" icon={faFileDownload} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
