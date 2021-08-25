import "./Userinfos.scss";

const Userinfos = () => {
  return (
    <div className="Userinfos">
      <div className="cover">
        <img src="https://picsum.photos/750/320" alt="" />
      </div>
      <div className="infos">
        <div className="profilePic">
          <img src="https://picsum.photos/150/150" alt="" />
        </div>
        <div className="profileInfos">
          <div className="left">
            <p className="item">Prénom : Thibaut</p>
            <p className="item">Nom : Orcel</p>
            <p className="item">Date de naissance : 21/04/1996</p>
            <p className="item">Métier : Développeur Web</p>
          </div>
          <div className="right">
            <p className="item">Ville : Le Havre</p>
            <p className="item">Origine : Montpellier</p>
            <p className="item">Scolarité : OpenClassrooms</p>
            <p className="item">Situation amoureuse : En Couple</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userinfos;
