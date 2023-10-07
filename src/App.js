// import logo from './logo.svg';
import "./App.css";
import DashBoard from "./components/Dashboard/DashBoard";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <LoginSignup />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
