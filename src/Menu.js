import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Icon, Header } from "./styled";

import calendar from "./calendar.png"; // Tell Webpack this JS file uses this image

export default () => (
  <React.Fragment>
    <Header />
    <Circle
      size={120}
      style={{ position: "absolute", right: "0.75rem", top: "9rem" }}
    >
      <Icon size={45} className="fas fa-coins" />
      <Label fontSize={28}>150</Label>
    </Circle>
    <Link to="/calendar">
      <Circle
        size={150}
        style={{ position: "absolute", left: "0.5rem", top: "15rem" }}
      >
        {/* <Icon size={60} className="far fa-calendar-alt" /> */}
        <img src={calendar} height={40} style={{ padding: "0.5rem" }} />
        <Label fontSize={23}>Calendar</Label>
      </Circle>
    </Link>
    <Circle
      size={170}
      style={{ position: "absolute", left: "1.5rem", bottom: "5rem" }}
    >
      <Icon size={60} className="far fa-user" />
      <Label>Next Steps</Label>
    </Circle>
    <Circle
      size={190}
      style={{ position: "absolute", right: "-1.5rem", bottom: "10rem" }}
    >
      <Icon size={60} className="far fa-users" />
      <Label>Users</Label>
    </Circle>
    <Circle
      size={150}
      style={{ position: "absolute", right: "-0.5rem", bottom: "-2rem" }}
    >
      {/* <Icon size={45} className="far fa-user" /> */}
      <Label fontSize={25}>Help</Label>
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
  cursor: pointer;
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
