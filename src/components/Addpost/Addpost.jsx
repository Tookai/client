import "./Addpost.scss";
import { Button, IconButton } from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

const Addpost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="Addpost">
        <div>

        <IconButton color="primary" onClick={handleOpen}>
          <PostAddIcon fontSize="large" />
        </IconButton>
        </div>
        <p>poster</p>
      </div>

      <Modal open={open} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="post__modal">
          <form action="/">
            <div className="item">
              <p>Topic : </p>
              <select>
                <option value="">*Choisissez votre topic*</option>
                <option value="A">Lifestyle</option>
                <option value="B">Funny</option>
                <option value="C">Meme</option>
                <option value="D">Animals</option>
                <option value="E">Car</option>
                <option value="F">Music</option>
                <option value="G">Movie</option>
                <option value="H">Sports</option>
                <option value="I">Video Games</option>
                <option value="J">Can't Class</option>
              </select>
            </div>

            <div className="item">
              <p>Qu'avez vous en tête ?</p>
              <textarea rows="5"></textarea>
            </div>

            <div className="item">
              <p>L'URL de votre image</p>
              <input type="text" />
            </div>
            <div className="buttons">
              <Button onClick={handleClose} variant="contained" color="primary">
                Poster
              </Button>
              <Button onClick={handleClose} variant="contained" color="secondary">
                Fermer
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Addpost;
