import "./Leftbar.scss";
import Avatar from "@material-ui/core/Avatar";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import PetsIcon from "@material-ui/icons/Pets";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MovieIcon from "@material-ui/icons/Movie";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Link } from "react-router-dom";


const Leftbar = () => {
  return (
    <div className="Leftbar">
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

      <div className="logout">
        <Link to="/login">
          <p>Se Déconnecter.</p>
        </Link>
        <Avatar
          alt=""
          src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>


    </div>
  );
};

export default Leftbar;
