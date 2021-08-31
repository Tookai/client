import "./Navbar.scss";
import icon from "../../images/icon.svg";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Addpost from "../Addpost/Addpost";
import Topicmodal from "../Topicmodal/Topicmodal";
import Logout from "../Logout/Logout";
import Users from "../Users/Users";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //
  // Gsap Animation
  const roundedBtn = useRef();
  useEffect(() => {
    open ? gsap.from(roundedBtn.current, { rotate: 720, duration: 1.2 }) : gsap.from(roundedBtn.current, { rotate: -720, duration: 1.2 });
  }, [open]);
  //
  const logo = useRef();
  useEffect(() => {
    gsap.from(logo.current, { rotation: -360, duration: 4, ease: "none", repeat: -1 });
  }, []);

  return (
    <div className="Navbar">
      <Link to="/">
        <div className="logo">
          <img src={icon} alt="Logo : Globe" className="img" ref={logo} />
          <h1 className="h1 text">Groupomania</h1>
        </div>
      </Link>

      <div className="modals" onClick={() => setOpen(!open)}>
        <div ref={roundedBtn}>
          <IconButton color="primary">{open ? <CloseIcon fontSize="medium" /> : <AddIcon fontSize="medium" />}</IconButton>
        </div>
      </div>
      {open && (
        <>
          <Topicmodal />
          <Logout />
          <Users />
          <Addpost />
        </>
      )}

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
