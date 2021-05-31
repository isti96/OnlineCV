import avatarPic from "./avatar.jpg";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import DarocziIstvanResume from "./Daroczi_Istvan_CV.docx";
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
              style={{ color: "black", fontFamily: "Arial" }}
              variant="h4"
            >
              <Typed
                strings={[
                  "<span>&lt;</span>" + "Daróczi István/" + "<span>&gt;</span>",
                ]}
                typeSpeed={60}
              ></Typed>
            </Typography>
            <Typography className="h3-header" variant="h5">
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
                Hello, my name is Isti and welcome to my website! I'm a young
                aspiring front-end web-developer. On this webpage you can find
                my online CV, everything that is important or at least
                interesting about me. I am looking to learn more every day, I'm
                passionated about technology and I like to find out how things
                work around me. I also enjoy working both as a team or
                individually. I'm a flexible person who gets accustomed really
                fast. If you want to get in touch you can find me in{" "}
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  Contact{" "}
                </Link>
                menupoint. My goal is to become a full-time Front-End
                Web-Developer because I like to see immediate results of my
                work.
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
