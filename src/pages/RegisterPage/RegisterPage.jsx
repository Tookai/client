import "./RegisterPage.scss";
import stackedLogo from "../../images/stackedLogo.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <div className="left">
        <img src={stackedLogo} alt="" />
      </div>
      <div className="right">
        <form className="form">
          <div className="item">
            <label htmlFor="firstName">Prénom :</label>
            <input placeholder="Jean" type="text" id="firstName" name="firstName" />
          </div>

          <div className="item">
            <label htmlFor="lastName">Nom :</label>
            <input placeholder="Dupont" type="text" id="lastName" name="lastName" />
          </div>

          <div className="item">
            <label htmlFor="email">E-Mail :</label>
            <input placeholder="jean.dupont@gmania.fr" type="email" id="email" name="email" />
          </div>

          <div className="item">
            <label htmlFor="password">Mot de Passe :</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="item">
            <label htmlFor="confirmPassword">Confirmer le Mot de Passe :</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>

          <Button variant="contained" color="primary">
            S'inscrire
          </Button>
        </form>

        <p className="question">Vous avez déjà un compte ?</p>
        <Link to="/login">
          <Button variant="contained" color="primary">
            Connectez Vous !
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
