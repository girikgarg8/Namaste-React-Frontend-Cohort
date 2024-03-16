import { useContext } from "react";
import UserContext from "../utils/UserContext.js";
const Footer = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="footer">
      <div>
        Hope you are doing awesome
        {userContext.userName != "" ? `, ${userContext.userName}` : ""} !
      </div>
    </div>
  );
};

export default Footer;
