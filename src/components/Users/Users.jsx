import "./Users.scss";
import { IconButton } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import Avatar from "@material-ui/core/Avatar";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

const Users = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="Users">
        <div>
          <IconButton color="primary" onClick={handleOpen}>
            <PeopleIcon fontSize="large" />
          </IconButton>
        </div>
        <p>utilisateurs</p>
      </div>

      <Modal open={open} onClose={handleClose} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <div className="users__modal">
          <div className="container">
            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Julia Fauvel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Thibaut Orcel</p>
            </div>

            <div className="user">
              <Avatar
                alt="user"
                src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <p className="username">Jean Jean</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Users;
