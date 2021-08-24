import Addpost from "../Addpost/Addpost";
import Topicmodal from "../Topicmodal/Topicmodal";
import Post from "../Post/Post";
import "./Feed.scss";

const Feed = () => {
  return (
    <>
      <Addpost />
      <Topicmodal />
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
