import Post from "../Post/Post";
import "./Feed.scss";

const Feed = () => {
  return (
    <>
      <div className="Feed">
        <Post content="Lorem ipsum dolor sit amet consectetur adipisicing elit." image="https://picsum.photos/750/380" />
        <Post content="Tempore, quisquam dicta." image="https://picsum.photos/500/300" />
        <Post
          content="Nisi quae corrupti temporibus error voluptatibus, magnam cumque tempora optio enim saepe quibusdam facere quis itaque, eaque cum dolores?"
          image="https://picsum.photos/400/300"
        />
        <Post
          content="Repudiandae tempora, ex incidunt ipsum corrupti dolorem harum inventore sequi!"
          image="https://picsum.photos/500/200"
        />
        <Post
          content=" Nostrum iure debitis provident officia deleniti, fuga magni soluta quas blanditiis accusamus?"
          image="https://picsum.photos/600/150"
        />
      </div>
    </>
  );
};

export default Feed;
