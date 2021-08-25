import { Button } from "@material-ui/core";
import Comment from "../Comment/Comment";
import "./Commentbox.scss";

const Commentbox = () => {
  return (
    <div className="Commentbox">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <form>
        <label htmlFor="comment">Laisser un commentaire :</label>
        <textarea name="comment" id="comment" cols="30" rows="6"></textarea>
        <Button variant="contained" color="primary">
          Envoyer
        </Button>
      </form>
    </div>
  );
};

export default Commentbox;
