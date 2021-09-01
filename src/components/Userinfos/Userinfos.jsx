import "./Userinfos.scss";
import * as api from "../../apiCall";
import { useQuery } from "react-query";
import { Button } from "@material-ui/core";
import Updatepic from "../Updatepic/Updatepic";
import Updateinfos from "../Updateinfos/Updateinfos";
import Deluser from "../Deluser/Deluser";

const Userinfos = () => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  //
  const id = window.location.pathname.split("/user/")[1];
  const { data, isLoading } = useQuery(["profile-user", { id }], () => api.selectOneUser(id));

  console.log(loggedUser);

  if (isLoading) {
    return <div>...</div>;
  }

  const u = data[0];
  return (
    <div className="Userinfos">
      {u.cover ? (
        <div className="cover">
          <img src={`${u.cover}`} alt="" />
        </div>
      ) : (
        <div className="cover">
          <img src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
      )}

      <div className="infos">
        {u.avatar ? (
          <div className="profilePic">
            <img src={`${u.avatar}`} alt="" />
          </div>
        ) : (
          <div className="profilePic">
            <img src="https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
          </div>
        )}

        <div className="profileInfos">
          <div className="left">
            <p className="item">Prénom : {u.firstName}</p>
            <p className="item">Nom : {u.lastName}</p>
            <p className="item">Date de naissance : {u.birthday}</p>
            <p className="item">Métier : {u.job}</p>
          </div>
          <div className="right">
            <p className="item">Ville : {u.city}</p>
            <p className="item">Origine : {u.fromCity}</p>
            <p className="item">Scolarité : {u.scholarship}</p>
            <p className="item">Situation amoureuse : {u.relationship}</p>
          </div>
        </div>
      </div>
      {parseInt(id) === loggedUser.userId && (
        <div className="update__btn">
          <Updatepic user={u} />
          <Updateinfos user={u} />
          <Deluser user={u} />
        </div>
      )}
    </div>
  );
};

export default Userinfos;
