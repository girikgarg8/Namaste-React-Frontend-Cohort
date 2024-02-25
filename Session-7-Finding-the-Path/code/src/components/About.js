import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
import WaveBye from "../assets/Wave-Bye-Sticker.gif";

const About = () => {
  return (
    <div className="app">
      <Header />
      <h2 className="about-heading"> Hello there! 👋</h2>
      <p className="about-text">
        This is Namaste Villa, a food ordering platform designed by Girik Garg
      </p>
      <p className="about-linkedin">
        Feel free to connect with me on{" "}
        <a href="https://www.linkedin.com/in/girik-garg" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="about-linkedin-icon" />
        </a>
      </p>
      <div className="about-wave-bye-container">
        <img src={WaveBye} className="about-wave-bye" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
