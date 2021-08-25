import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import CommentPage from "./pages/CommentPage/CommentPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route path="/user/:id">
          <UserPage />
        </Route>

        <Route path="/comment/:id">
          <CommentPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
