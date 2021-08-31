import "./RegisterPage.scss";
import stackedLogo from "../../images/stackedLogo.svg";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../../apiCall";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  //
  const history = useHistory();
  //
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(api.createUser, {
    onSuccess: () => {
      // queryClient.invalidateQueries("user");
      history.push("/login");
    },
  });
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPw && password !== "" && confirmPw !== "" && firstName !== "" && lastName !== "" && email !== "") {
      const user = { firstName, lastName, email, password };
      mutate(user);
    } else if (password !== confirmPw) {
      alert("Les mots de passe ne correspondent pas.");
    }
  };

  return (
    <div className="RegisterPage">
      <div className="left">
        <img src={stackedLogo} alt="" />
      </div>
      <div className="right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="firstName">Prénom :</label>
            <input placeholder="Jean" type="text" id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div className="item">
            <label htmlFor="lastName">Nom :</label>
            <input placeholder="Dupont" type="text" id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="item">
            <label htmlFor="email">E-Mail :</label>
            <input placeholder="jean.dupont@gmania.fr" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="item">
            <label htmlFor="password">Mot de Passe :</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="item">
            <label htmlFor="confirmPassword">Confirmer le Mot de Passe :</label>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPw(e.target.value)} />
          </div>
          {!isLoading ? (
            <Button variant="contained" color="primary" type="submit">
              S'inscrire
            </Button>
          ) : (
            <Button variant="contained" color="primary" type="submit">
              Enregistrement en cours...
            </Button>
          )}
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
