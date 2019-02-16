import React from "react";
import styled from "styled-components";

import { LogoBoxSec, Name, Logo, Icon } from "./styled";

export default () => (
  <React.Fragment>
    <LogoBoxSec>
      <Logo src="/logo.png" height={100} />
      <Name>kleen.io</Name>
    </LogoBoxSec>

    <Circle
      size={150}
      style={{ position: "absolute", right: "1rem", top: "5rem" }}
    >
      <Icon size={55} className="fas fa-coins" />
      <Label>150</Label>
    </Circle>
    <Circle
      size={120}
      style={{ position: "absolute", right: "0.5rem", top: "15rem" }}
    >
      <Icon size={60} className="far fa-calendar-alt" />
      <Label>Calendar</Label>
    </Circle>
    <Circle
      size={170}
      style={{ position: "absolute", left: "1.5rem", bottom: "5rem" }}
    >
      <Icon size={60} className="far fa-user" />
      <Label>Users</Label>
    </Circle>
  </React.Fragment>
);

const Circle = styled.div`
  height: ${props => (props.size ? `${props.size}px` : `100px`)};
  width: ${props => (props.size ? `${props.size}px` : `100px`)};
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 50%;
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Label = styled.div`
  font-family: Lato;
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : `25px`)};
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
