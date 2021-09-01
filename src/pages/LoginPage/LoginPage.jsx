import "./LoginPage.scss";
import stackedLogo from "../../images/stackedLogo.svg";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import * as api from "../../apiCall";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { mutate } = useMutation(api.loginUser, {
    onSuccess: (data) => {
      const user = { userId: data[0].id };
      localStorage.setItem("user", JSON.stringify(user));
    },
    onError: () => {
      alert("L'identifiant ou le mot de passe est incorrect.");
    },
  });
  //
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  loggedUser && history.push("/");
  //

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (password !== "" && email !== "") {
      const user = { email, password };
      mutate(user);
    } else {
      alert("Les champs doivent être remplis.");
    }
  };

  return (
    <div className="LoginPage">
      <div className="left">
        <img src={stackedLogo} alt="" />
      </div>
      <div className="right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="email">E-Mail :</label>
            <input
              required
              placeholder="jean.dupont@gmania.fr"
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="item">
            <label htmlFor="password">Mot de Passe :</label>
            <input required type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <Button variant="contained" color="primary" type="submit">
            Se Connecter
          </Button>
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
