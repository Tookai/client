import { Button, IconButton, TextField } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import * as api from "../../apiCall";
import "./Updatepost.scss";

const Updatepost = ({ post }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setDesc(post.desc);
    setImage(post.image);
    setTopic(post.topic);
  };
  //
  //
  const [desc, setDesc] = useState(post.desc);
  const [image, setImage] = useState(post.image);
  const [topic, setTopic] = useState(post.topic);
  const id = post.id;

  //
  //
  const pathname = window.location.pathname;
  const queryClient = useQueryClient();
  const { mutate } = useMutation(api.updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["feed", { pathname }]);
      setOpen(false);
    },
  });
  //
  const { mutate: mutation } = useMutation(api.deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["feed", { pathname }]);
      setOpen(false);
    },
  });

  //
  const handleUpdate = () => {
    const content = { desc, image, topic };
    const body = { id, content };
    mutate(body);
  };

  const handleDelete = () => {
    if (window.confirm("Voulez vous vraiment supprimer ?")) {
      mutation(id);
    }
  };

  return (
    <div className="Updatepost">
      <IconButton color="primary" variant="contained" size="small" onClick={handleOpen}>
        <MoreHorizIcon />
      </IconButton>

      <Modal open={open} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="updatepost__modal">
          <form>
            <label htmlFor="topic">Topic :</label>
            <select id="topic" onChange={(e) => setTopic(e.target.value)}>
              <option selected value={post.topic}>
                {post.topic}
              </option>
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

            <label htmlFor="desc">Description :</label>
            <TextField
              id="desc"
              multiline
              rows={4}
              defaultValue={desc}
              variant="outlined"
              style={{ backgroundColor: "white", marginBottom: "1rem" }}
              onChange={(e) => setDesc(e.target.value)}
            />
            {image && <img src={image} alt="" className="image__preview" />}

            <label htmlFor="avatar">Image :</label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              placeholder="Mettez l'URL de votre nouvelle photo de profil ici..."
              onChange={(e) => setImage(e.target.value)}
            />
          </form>

          <div className="btn__container">
            <Button variant="contained" color="primary" onClick={handleUpdate} style={{ margin: "0.3rem" }}>
              Mettre à jour
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose} style={{ margin: "0.3rem" }}>
              Annuler
            </Button>
          </div>
          <div className="center__btn">
            <div className="delete__btn">
              <Button variant="contained" color="secondary" style={{ margin: "0.3rem" }} onClick={handleDelete}>
                Supprimer le post
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Updatepost;
