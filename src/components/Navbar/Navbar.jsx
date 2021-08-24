import "./Navbar.scss";
import icon from "../../images/icon.svg";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Addpost from "../Addpost/Addpost";
import Topicmodal from "../Topicmodal/Topicmodal";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <div className="logo">
          <img src={icon} alt="" className="img" />
          <h1 className="h1 text">Groupomania</h1>
        </div>
      </Link>

      <Topicmodal />
      <Addpost />

      <div className="greeting">
        <p className="hello">Bonjour, toi.</p>
        <Link to="/user/1">
          <Avatar
            alt="user"
            src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
