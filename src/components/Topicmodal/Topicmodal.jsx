import "./Topicmodal.scss";
import { Button, IconButton } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import PetsIcon from "@material-ui/icons/Pets";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MovieIcon from "@material-ui/icons/Movie";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const Topicmodal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="Topicmodal">
        <div>

        <IconButton color="primary" onClick={handleOpen}>
          <FormatListBulletedIcon fontSize="large" />
        </IconButton>
        </div>
        <p>catégories</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", overflowY: "scroll" }}
      >
        <div className="topic__modal">
          <div className="container">
            <div className="topic">
              <AccessibilityIcon fontSize="large" />
              <h2 className="h2">Lifestyle</h2>
            </div>
            <div className="topic">
              <ChildCareIcon fontSize="large" />
              <h2 className="h2">Funny</h2>
            </div>

            <div className="topic">
              <PetsIcon fontSize="large" />
              <h2 className="h2">Meme</h2>
            </div>

            <div className="topic">
              <PetsIcon fontSize="large" />
              <h2 className="h2">Animals</h2>
            </div>

            <div className="topic">
              <DriveEtaIcon fontSize="large" />
              <h2 className="h2">Car</h2>
            </div>

            <div className="topic">
              <MusicNoteIcon fontSize="large" />
              <h2 className="h2">Music</h2>
            </div>

            <div className="topic">
              <MovieIcon fontSize="large" />
              <h2 className="h2">Movie</h2>
            </div>

            <div className="topic">
              <SportsSoccerIcon fontSize="large" />
              <h2 className="h2">Sports</h2>
            </div>

            <div className="topic">
              <SportsEsportsIcon fontSize="large" />
              <h2 className="h2">Video Games</h2>
            </div>

            <div className="topic">
              <CreateNewFolderIcon fontSize="large" />
              <h2 className="h2">Can't Class</h2>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Topicmodal;
