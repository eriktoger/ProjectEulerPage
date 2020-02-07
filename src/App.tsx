import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import PE1 from "./Problems/PE1";
import HomePage from "./Common/homepage";
import PageNotFound from "./Common/pagenotfound";
const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Problems/PE1"> Problem 1</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Problems/PE1" component={PE1} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
