import avatarPic from "./avatar.jpg";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { Component } from "react";

export class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }

  render() {
    return (
      <div className="app-home">
        <img src={avatarPic} alt="avatar" className="avatar-pic" />
        <div className="parag">
          
          <p data-aos="fade-right"> Daróczi </p>
          <p data-aos="fade-left"> István </p>
        </div>
        <div className="icon-container">
          <a href="https://github.com/isti96?tab=repositories">
            <FontAwesomeIcon
              className="fa-4x github"
              icon={faGithub}
              data-aos="fade-right"
            />
          </a>
          <a href="https://www.instagram.com/instapista96/">
            <FontAwesomeIcon
              className="fa-4x instagram"
              icon={faInstagram}
              style={{ color: "rgb(155, 105, 84)" }}
              data-aos="fade-right"
            />
          </a>
          <a href="https://www.facebook.com/isti.daroczi">
            <FontAwesomeIcon
              className="fa-4x facebook"
              icon={faFacebook}
              style={{ color: "rgb(66, 103, 178)" }}
              data-aos="fade-left"
            />{" "}
          </a>
          <a href="https://www.linkedin.com/in/istv%C3%A1n-dar%C3%B3czi-236748200/">
            <FontAwesomeIcon
              className="fa-4x linkedin"
              icon={faLinkedin}
              data-aos="fade-left"
            />
          </a>
        </div>
      </div>
    );
  }
}
