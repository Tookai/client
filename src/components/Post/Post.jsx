import { Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import "./Post.scss";
import { Link } from "react-router-dom";

const Post = () => {
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

        <IconButton color="secondary" variant="contained" size="small">
          <ClearIcon />
        </IconButton>
      </div>

      <hr />

      <div className="content">
        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, accusantium quis aspernatur dolores sint tenetur molestias quo.
          Quas quo nihil vel dolor repudiandae quasi voluptates, dolorum facere consequatur dignissimos reiciendis?
        </p>
        <img src="https://picsum.photos/750/300" alt="random" className="img" />
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
          <Button variant="contained" color="primary" size="small">
            Commenter
          </Button>
          <p>(0)</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
