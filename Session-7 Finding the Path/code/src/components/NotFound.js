import NotFoundTelescopeIcon from "../assets/Not-Found-Telescope.jpg";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <img src={NotFoundTelescopeIcon} className="not-found-img" />
        <p className="not-found-text">
          We searched far and wide, but couldn't find the requested resource.{" "}
        </p>
        <p className="not-found-redirection"> Click <Link to="/"> here </Link> to go back to the home page </p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
