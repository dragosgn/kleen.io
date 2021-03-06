import React from "react";
import styled from "styled-components";
import { LogoBox, Name, Logo, SecondaryLink, Input } from "./styled";
import logoNew from "./logo_new.png";

export default () => (
  <React.Fragment>
    <LogoBox>
      <Logo src={logoNew} height={120} />
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
    <Input type="text" placeholder="Name" value="David Mueller" />
    <Input type="text" placeholder="Email" value="david.mueller@gmx.com" />
    <Input type="password" placeholder="Password" value="12342342345" />
    <SecondaryLink to="/menu">Continue</SecondaryLink>
  </React.Fragment>
);

const SecButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const SmallButton = styled.button`
  width: 80px;
  height: 30.9px;
  border-radius: 13px;
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
`;

const SmallButtonWhite = styled.button`
  width: 80px;
  height: 30.9px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  background: transparent;
  border: transparent;
`;

const SmallLabel = styled.div`
  width: 100%;
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
  width: 100%;
  height: 12px;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: 0.3px;
  text-align: left;
  color: #78849e;
  text-transform: uppercase;
`;
