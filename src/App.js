import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Menu from "./Menu";
import Step1 from "./Step1";
import Home from "./Home";
import Calendar from "./Calendar";
import Community from "./Community";
import NextSteps from "./NextSteps";
import Help from "./Help";
import Wallet from "./Wallet";

class App extends Component {
  render() {
    return (
      <Root>
        <Route exact path="/" component={Home} />
        <Route exact path="/step1" component={Step1} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/next-steps" component={NextSteps} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/wallet" component={Wallet} />
      </Root>
    );
  }
}

export default App;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* padding: 0.5rem 1.5rem; */
`;
