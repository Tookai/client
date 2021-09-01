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
import * as api from "../../apiCall";
import { useQuery, useQueryClient } from "react-query";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //
  // Get current user Data
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const { data, isLoading } = useQuery("logged-user", () => api.selectOneUser(loggedUser.userId));
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
  //
  //
  const queryClient = useQueryClient();
  const handleClick = () => {
    queryClient.invalidateQueries("profile-user");
    queryClient.invalidateQueries("feed");
  };

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

      {isLoading ? (
        <div className="greeting">
          <p className="hello">Bonjour, toi.</p>
          <Avatar alt="" src="" />
        </div>
      ) : (
        <div className="greeting">
          <p className="hello">Bonjour, {data[0].firstName}</p>
          <Link to={`/user/${loggedUser.userId}`} onClick={handleClick}>
            <Avatar alt={`${data[0].firstName} Avatar`} src={`${data[0].avatar}`} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
