import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import UserContext from "../utils/UserContext.js";
import WaveBye from "../assets/Wave-Bye-Sticker.gif";
import Footer from "./Footer.js";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="about-container">
        <UserContext.Consumer>
          {(userInfo) => (
            <h2 className="about-heading"> Hello {userInfo.userName} ! 👋</h2>
          )}
        </UserContext.Consumer>
        <p className="about-text">
          This is Namaste Villa, a food ordering platform designed by Girik Garg
        </p>
        <p className="about-linkedin">
          Feel free to connect with me on{" "}
          <a href="https://www.linkedin.com/in/girik-garg" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="about-linkedin-icon"
            />
          </a>
        </p>
        <div className="about-wave-bye-container">
          <img src={WaveBye} className="about-wave-bye" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
