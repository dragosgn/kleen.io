import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Menu from "./Menu";

import Step1 from "./Step1";

import Home from "./Home";
import Calendar from "./Calendar";

class App extends Component {
  render() {
    return (
      <Root>
        <Route exact path="/" component={Home} />
        <Route exact path="/step1" component={Step1} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/menu" component={Menu} />
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
  padding: 0.5rem 1.5rem;
`;
