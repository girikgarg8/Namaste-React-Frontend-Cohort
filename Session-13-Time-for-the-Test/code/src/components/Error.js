import Header from "./Header";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div className="error-container">
        <h2 className="error-heading"> Something went wrong ! </h2>
        <h3 className="error-message">
          Error {error.status} : {error.statusText}
        </h3>
        <p className="error-not-found-redirection">
          Click <Link to="/"> here </Link> to go back to the home page{" "}
        </p>
      </div>
    </>
  );
};

export default Error;
