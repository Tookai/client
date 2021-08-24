import "./Logout.scss";
import { Button, IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    history.push("/login");
  };

  return (
    <>
      <div className="Logout">
        <IconButton color="default" onClick={handleOpen}>
          <ExitToAppIcon fontSize="large" />
        </IconButton>
      </div>

      <Modal open={open} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="post__modal">
          <Avatar
            alt="user"
            src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            style={{ height: "250px", width: "250px" }}
          />
          <p className="username">Thibaut Orcel</p>

          <h2 className="h2">Vous nous quittez déjà ?</h2>

          <div className="buttons">
            <Button onClick={handleClose} variant="contained" color="primary" style={{ margin: "1rem" }}>
              Non, <br /> c'est une erreur !
            </Button>
            <Button onClick={handleLogout} variant="contained" color="secondary" style={{ margin: "1rem" }}>
              Oui, <br /> j'ai du travail.
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Logout;
