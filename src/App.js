import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "./styled";

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
        <Button label="Continue" secondary />
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
