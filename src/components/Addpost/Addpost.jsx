import "./Addpost.scss";
import { Button, IconButton } from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Modal from "@material-ui/core/Modal";
import { useState, useRef, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../../apiCall";
import gsap from "gsap";

const Addpost = () => {
  //
  // For Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //
  // Get form data
  const [topic, setTopic] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const userId = 1;
  const post = { topic, desc, image, userId };
  //
  // Update feed on submit
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(api.createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("feed");
      setOpen(false);
    },
  });
  // Add a post
  const handleSubmit = () => {
    mutate(post);
  };
  //
  // Gsap Animation
  const roundedBtn = useRef();
  useEffect(() => {
    gsap.fromTo(roundedBtn.current, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.6 });
  }, []);

  return (
    <>
      <div className="Addpost" ref={roundedBtn}>
        <div>
          <IconButton color="primary" onClick={handleOpen}>
            <PostAddIcon fontSize="large" />
          </IconButton>
        </div>
        <p>poster</p>
      </div>

      <Modal open={open} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="post__modal">
          {isLoading ? (
            <p>We are uploading your post ...</p>
          ) : (
            <form>
              <div className="item">
                <p>Topic : </p>
                <select onChange={(e) => setTopic(e.target.value)}>
                  <option value="">*Choisissez votre topic*</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Funny">Funny</option>
                  <option value="Meme">Meme</option>
                  <option value="Animals">Animals</option>
                  <option value="Car">Car</option>
                  <option value="Music">Music</option>
                  <option value="Movie">Movie</option>
                  <option value="Sports">Sports</option>
                  <option value="Video_Games">Video Games</option>
                  <option value="Cant_Class">Can't Class</option>
                </select>
              </div>

              <div className="item">
                <p>Qu'avez vous en tête ?</p>
                <textarea rows="5" onChange={(e) => setDesc(e.target.value)}></textarea>
              </div>

              <div className="item">
                <p>L'URL de votre image</p>
                <input type="text" onChange={(e) => setImage(e.target.value)} />
              </div>
              <div className="buttons">
                <Button onClick={handleSubmit} variant="contained" color="primary">
                  Poster
                </Button>
                <Button onClick={handleClose} variant="contained" color="secondary">
                  Fermer
                </Button>
              </div>
            </form>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Addpost;
