import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { SecondaryLink } from "./styled";

import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: "one"
    };
  }
  render() {
    return (
      <Root>
        <SecondaryLink to="/home">Continue</SecondaryLink>
        <Route exact path="/home" component={Home} />
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
`;
