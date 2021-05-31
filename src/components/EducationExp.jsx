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
          <h4>2019 Oct-2020 Nov</h4>
          <h5>Topograph/Geodetic engineer - Global Topo SRL</h5>
          <h4>2021 Jan-Jun</h4>
          <h5>
            Some mini-projects at the Front-end Web-dev course in HTML, CSS, JS
            and ReactJS
          </h5>
        </div>
      </div>
    );
  }
}
