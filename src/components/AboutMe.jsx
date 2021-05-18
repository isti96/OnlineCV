import avatarPic from "./avatar.jpg";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import DarocziIstvanResume from "./Daroczi_Istvan_CV.docx";

export function AboutMe() {
  return (
    <div className="app-aboutme">
      <div className="page-container">
        <img src={avatarPic} alt="avatar" className="avatar-pic" />
        <div className="aboutme-div">
          <h1 className="h1-header"> Daróczi István</h1>
          <h3 className="h3-header"> Junior Front-end Web-developer</h3>
          <h2 className="text"> About me </h2>
          <p className="para-text">
            Hello, my name is Isti fmiermv iermsiv mersib mers ibmeris bmei
            bmeir bmei sbmbm ibmerb iembi em rm mbierm biermbierb mierbm ierm
            biem bmreibmesribmeirsbmerisbmiesrmb iermbiermbiermbier mibm ierm
            iermb ierm iemr miemreribmiskroaekfoeramvroemv ioerm bior
          </p>
        </div>
        <hr className="horizontal-line" />
        <div className="hobbies">
          <h2 className="text">Hobbies</h2>
          <p className="para-text">
            I'm a very outgoing person, so most of my hobbies are related to
            travelling, hiking, unexpected roadtrips,discovering new places,new
            people,learning about other people's culture and traditions. I
            believe travelling broadens the mind and this is what makes me feel
            fulfilled. I do also enjoy a good read and I'm always looking to try
            new things and to learn more.
          </p>
        </div>
        <hr className="horizontal-line" />
        <div className="resume">
            <p> Download my resume:</p>
        <a href={DarocziIstvanResume}   download={DarocziIstvanResume} >
        <FontAwesomeIcon className="fa-4x gitHub" icon={faFileDownload} />
        </a>
        </div>
      </div>
    </div>
  );
}
