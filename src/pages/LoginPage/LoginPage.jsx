import "./LoginPage.scss";
import stackedLogo from "../../images/stackedLogo.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="left">
        <img src={stackedLogo} alt="" />
      </div>
      <div className="right">
        <form className="form">
          <div className="item">
            <label htmlFor="email">E-Mail :</label>
            <input placeholder="jean.dupont@gmania.fr" type="email" id="email" name="email" />
          </div>

          <div className="item">
            <label htmlFor="password">Mot de Passe :</label>
            <input type="password" id="password" name="password" />
          </div>

          <Link to="/">
            <Button variant="contained" color="primary">
              Se Connecter
            </Button>
          </Link>
        </form>

        <p className="question">Vous n'avez pas encore de compte ?</p>
        <Link to="/register">
          <Button variant="contained" color="primary">
            Inscrivez Vous !
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
