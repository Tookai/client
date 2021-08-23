import Addpost from "../Addpost/Addpost";
import Post from "../Post/Post";
import "./Feed.scss";

const Feed = () => {
  return (
    <>
      <Addpost />
      <div className="Feed">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Feed;
