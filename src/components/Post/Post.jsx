import { Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import "./Post.scss";

const Post = () => {
  return (
    <div className="Post">
      <div className="top">
        <div className="infos">
          <p>Posté par : Thibaut Orcel</p>
          <p>À : 00:08 24/08/2021 </p>
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
        <Button variant="contained" color="primary" size="small">
          J'aime !
        </Button>

        <Button variant="contained" color="primary" size="small">
          Commenter
        </Button>
      </div>
    </div>
  );
};

export default Post;
