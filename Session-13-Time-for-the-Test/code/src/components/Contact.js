import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FooterIcon from "../assets/Lets-Connect.jpg";
import Footer from "./Footer.js";

const Contact = () => {
  return (
    <div className="contact-container" data-testid="contact">
      <h2 className="contact-heading"> Need to get in touch? </h2>
      <p className="contact-lets-connect"> Would love to collaborate! </p>
      <ul>
        <li>
          Shoot me an email &nbsp;&nbsp;
          <a href="mailto:girikgarg8@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} data-testid="email-icon" />
          </a>
        </li>
        <li>
          Connect on LinkedIn &nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/girik-garg" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              data-testid="linkedin-icon"
              className="about-linkedin-icon"
            />
          </a>
        </li>
        <li>
          Follow my Twitter journey &nbsp;&nbsp;
          <a href="https://www.twitter.com/girikgarg8" target="_blank">
            <FontAwesomeIcon icon={faTwitter} data-testid="twitter-icon" />
          </a>
        </li>
      </ul>
      <img
        src={FooterIcon}
        className="contact-footer-icon"
        alt="lets-connect"
      />
      <Footer />
    </div>
  );
};

export default Contact;
