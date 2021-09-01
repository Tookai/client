import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../../apiCall";
import "./Updatepic.scss";

const Updatepic = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //
  //
  const [cover, setCover] = useState("");
  cover === "" && setCover(user.cover);
  const [avatar, setAvatar] = useState("");
  avatar === "" && setAvatar(user.avatar);
  //
  //
  const id = parseInt(user.id);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(api.updateUserPic, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile-user");
      queryClient.invalidateQueries("logged-user");
      setOpen(false);
    },
  });

  //
  const handleSubmit = () => {
      const pictures = { avatar, cover };
      const body = { id, pictures };
      mutate(body);
  };

  console.log(user);

  return (
    <div className="Updatepic">
      <Button variant="contained" color="primary" onClick={handleOpen} style={{margin: "0.3rem"}}>
        Mettre à jour<br/> vos photos
      </Button>

      <Modal open={open} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="pictures__modal">
          <form>
            <label htmlFor="cover">Cover :</label>
            <input
              type="text"
              id="cover"
              name="cover"
              placeholder="Mettez l'URL de votre nouvelle photo de couverture ici..."
              onChange={(e) => setCover(e.target.value)}
            />

            <label htmlFor="avatar">Avatar :</label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              placeholder="Mettez l'URL de votre nouvelle photo de profil ici..."
              onChange={(e) => setAvatar(e.target.value)}
            />
          </form>

          <div className="btn__container">
            <Button variant="contained" color="primary" onClick={handleSubmit} style={{margin: "0.3rem"}}>
              Mettre à jour
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose} style={{margin: "0.3rem"}}>
              Annuler
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Updatepic;
