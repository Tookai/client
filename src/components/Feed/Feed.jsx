import { useQuery } from "react-query";
import * as api from "../../apiCall";
import Post from "../Post/Post";
import "./Feed.scss";

const Feed = () => {
  const { data, isLoading, isError } = useQuery("feed", api.selectAllPost);

  data?.sort(function (a, b) {
    return b.id - a.id;
  });

  if (isLoading) {
    return <div>The data is loading...</div>;
  }

  if (isError) {
    return <div>There seems to be an error...</div>;
  }

  return (
    <>
      <div className="Feed">
        {data?.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </>
  );
};

export default Feed;
