import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <h2 className="heading"> Welcome to Foodvilla </h2>
      <div className="nav-items">
        <ul>
          <Link to="/"> Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact"> Contact Us</Link>
          <Link to="/cart"> Cart (0)</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
