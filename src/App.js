import "./App.css";
import Home from "./Home";
import Getstarted from "./Getstarted";
import Business from "./Business";
import Buy from "./Buy";
import Sell from "./Sell";
import Login from "./Login";
import Signup from "./Signup";
import Error from "./Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Router } from "react-router-dom";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/getstarted">
          <Getstarted />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
        <Route path="/buy">
          <Buy />
        </Route>
        <Route path="/sell">
          <Sell />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
