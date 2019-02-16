import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { SecondaryLink, Input } from "./styled";

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
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Password" />
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
  padding: 0.5rem 1.5rem;
`;
