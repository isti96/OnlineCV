import "./EducationExp.css";
import cnsLogo from "./cnslogo.jpg";
import utcnLogo from "./utcnlogo.jpg";
import scitLogo from "./scitlogo.jpg";
import { Component } from "react";

export class EducationExp extends Component {


  constructor(props){
    super(props)
    this.state = {
        visibility: false
      };

}
toggleVisibility=()=>{
    this.setState({
    visibility: !this.state.visibility
    })
    }

  render() {
    return (
      <div className="edu-container">
        <div className="container1">
          <h2>Education</h2>
          <h4 onClick={this.toggleVisibility} className="first-year">2011-2015</h4>
          {this.state.visibility ? <div><img src={cnsLogo} alt="cnslogo" className="cnslogo" />
          <h5>Colegiul Național Silvania, Zalău</h5></div> : "" }
          
          <h4 onClick={this.toggleVisibility} className="second-year">2015-2019</h4>
          {this.state.visibility ? <div><img src={utcnLogo} alt="utcnlogo" className="utcnlogo" />
          <h5>Technical University of Cluj-Napoca</h5>
          <p>
            Engineering diploma in Land Measurements and Cadastre, Faculty of
            Civil Engineering{" "}
          </p></div> : "" }
          <h4>2021 Jan-Jun</h4>
          <img src={scitLogo} alt="scitlogo" className="scitlogo" />
          <p>Front-end Web-development course, Școala Informală de IT</p>
        </div>
        <div className="container2">
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
