import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PE1 from "./Problems/PE1";
import PE2 from "./Problems/PE2";
import PE3 from "./Problems/PE3";
import {About} from "./Common/about";
import PageNotFound from "./Common/pagenotfound";
import { Header } from "./Common/header";
import { Menu } from "./Common/menu";
import { Admin } from "./Common/admin/admin";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-left: 40px;
  `;
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="row">
          <div className="column1">
            <Menu />
          </div>
          <StyledDiv>
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/admin" component={Admin} />
              <Route path="/Problems/PE1" component={PE1} />
              <Route path="/Problems/PE2" component={PE2} />
              <Route path="/Problems/PE3" component={PE3} />
              <Route component={PageNotFound} />
            </Switch>
          </StyledDiv>
        </div>
      </Router>
    </div>
  );
};

export default App;
