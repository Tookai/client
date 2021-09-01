import { Button, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import * as api from "../../apiCall";
import "./Post.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const Post = ({ post }) => {
  timeago.register("fr", fr);
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const id = post.id;
  const { data, isLoading } = useQuery(["post-user", { id }], () => api.selectOneUser(post.userId));

  return (
    <div className="Post">
      <div className="top">
        <div className="infos">
          <p>
            Posté par :{" "}
            {isLoading ? (
              <div>...</div>
            ) : (
              <Link to={`/user/${post.userId}`}>
                <em>
                  {" "}
                  {data[0].firstName} {data[0].lastName}
                </em>
              </Link>
            )}
          </p>
          <p>
            <TimeAgo datetime={`${post.createdAt}`} locale="fr" />
          </p>
        </div>
        <div>
          {post.userId === loggedUser.userId && (
            <IconButton color="primary" variant="contained" size="small">
              <MoreHorizIcon />
            </IconButton>
          )}
        </div>
      </div>

      <hr />

      <div className="content">
        <p className="text">{post.desc}</p>
        {post.image && <img src={`${post.image}`} alt="random" className="img" loading="lazy" />}
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
          <Link to={`/id/${post.id}`}>
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
