import { Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Post.scss";
import { Link } from "react-router-dom";

const Post = ({ content, image }) => {
  return (
    <div className="Post">
      <div className="top">
        <div className="infos">
          <p>
            Posté par :
            <Link to="/user/1">
              <em> Thibaut Orcel</em>
            </Link>
          </p>
          <p>À : 00:08 24/08/2021</p>
        </div>
        <div>
          <IconButton color="primary" variant="contained" size="small">
            <MoreHorizIcon />
          </IconButton>
{/*           <IconButton color="secondary" variant="contained" size="small">
            <ClearIcon />
          </IconButton> */}
        </div>
      </div>

      <hr />

      <div className="content">
        <p className="text">{content}</p>
        <img src={`${image}`} alt="random" className="img" loading="lazy" />
      </div>

      <hr />

      <div className="actions">
        <div>
          <Button variant="contained" color="primary" size="small">
            J'aime !
          </Button>
          <p>(0)</p>
        </div>

        <div>
          <Link to="/comment/12">
            <Button variant="contained" color="primary" size="small">
              Commenter
            </Button>
          </Link>
          <p>(0)</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
