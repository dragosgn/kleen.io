import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { SecondaryLink, Input } from "./styled";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Root>
        <LogoBox>
          <Logo src="/logo.png" height={120} />
          <Name>kleen.io</Name>
        </LogoBox>
        <SecButtonsRow>
          <SmallButtonWhite>
            <SmallLabelWhite>Sign up</SmallLabelWhite>
          </SmallButtonWhite>
          <SmallButton>
            <SmallLabel>Sign in</SmallLabel>
          </SmallButton>
        </SecButtonsRow>
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

const Logo = styled.img``;

const Name = styled.p`
  color: ${props => props.theme.primaryColor};
  font-size: 26px;
  font-weight: 600px;
  text-align: center;
  margin: 0.5rem;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const SecButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const SmallButton = styled.button`
  width: 73px;
  height: 30.9px;
  border-radius: 13px;
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
`;

const SmallButtonWhite = styled.button`
  width: 73px;
  height: 30.9px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  background: transparent;
  border: transparent;
`;

const SmallLabel = styled.div`
  width: 51px;
  height: 13px;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: 0.3px;
  text-align: left;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
`;

const SmallLabelWhite = styled.div`
  width: 46px;
  height: 12px;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: 0.3px;
  text-align: left;
  color: #78849e;
`;
