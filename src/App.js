import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Step1 from "./Step1";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Root>
        <Route exact path="/" component={Home} />
        <Route exact path="/step1" component={Step1} />
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
  height: 100vh;
  padding: 0.5rem 1.5rem;
`;
