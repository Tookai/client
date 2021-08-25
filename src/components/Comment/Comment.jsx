import "./Comment.scss";

const Comment = () => {
  return (
    <div className="Comment">
      <div className="infos">
        <p>
          Posté par : <em>Thibaut Orcel</em>
        </p>
        <p>À : 14:25 25/08/2021</p>
      </div>
      <div className="content">C'est tout simplement magnifique.</div>
    </div>
  );
};

export default Comment;
