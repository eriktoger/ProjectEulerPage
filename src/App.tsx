import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PE1 from "./Problems/PE1";
import PE2 from "./Problems/PE2";
import PE3 from "./Problems/PE3";
import HomePage from "./Common/homepage";
import PageNotFound from "./Common/pagenotfound";
import { Header } from "./Common/header";
import { Menu } from "./Common/menu";
import { Admin } from "./Common/admin";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="row">
          <div className="column1">
            <Menu />
          </div>
          <div className="column2">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/admin" component={Admin} />
              <Route path="/Problems/PE1" component={PE1} />
              <Route path="/Problems/PE2" component={PE2} />
              <Route path="/Problems/PE3" component={PE3} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
