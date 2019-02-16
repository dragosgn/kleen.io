import React from "react";
import styled from "styled-components";
import { LogoBox, Name, Logo, SecondaryLink, Input } from "./styled";

export default () => (
  <React.Fragment>
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
    <Input type="password" placeholder="Password" />
    <SecondaryLink to="/menu">Continue</SecondaryLink>
  </React.Fragment>
);

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
