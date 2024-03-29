import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="top-header" data-testid="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <h2 className="heading"> Welcome to Foodvilla </h2>
      <div className="nav-items">
        <ul>
          <Link to="/"> Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact"> Contact Us</Link>
          <Link to="/cart"> Cart ({cartItems.length})</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
