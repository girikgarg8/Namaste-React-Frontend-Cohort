import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <h2 className="heading"> Welcome to Foodvilla </h2>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About</li>
          <li> Contact</li>
          <li> Cart (0)</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
