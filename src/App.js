import React, { Component } from "react";
import styled from "styled-components";

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
        <Button>Start</Button>
      </Root>
    );
  }
}

export default App;

const Button = styled.button`
  padding: 1rem 6rem;
  font-size: 1.25rem;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.primaryColor};
  max-width: 80%;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
