import "./Navbar.scss";
import icon from "../../images/icon.svg";
import Avatar from "@material-ui/core/Avatar";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={icon} alt="" className="img" />
        <h1 className="h1">Groupomania</h1>
      </div>

      <div className="greeting">
        <p className="hello">Bonjour, toi.</p>
        <Avatar alt="user" src="" />
      </div>
    </div>
  );
};

export default Navbar;
