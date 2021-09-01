import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import CommentPage from "./pages/CommentPage/CommentPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/register">
            <RegisterPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route path="/user/:id">{!loggedUser ? <Redirect to="/login" /> : <UserPage />}</Route>

          <Route path="/id/:id">{!loggedUser ? <Redirect to="/login" /> : <CommentPage />}</Route>

          <Route path="/">{!loggedUser ? <Redirect to="/login" /> : <HomePage />}</Route>
        </Switch>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
