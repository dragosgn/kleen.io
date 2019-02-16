import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Icon, Header } from "./styled";

import calendar from "./calendar.png"; // Tell Webpack this JS file uses this image
import friends from "./friends.png";
import coins from "./coins.png";
import nextSteps from "./next_steps.png";

export default () => (
  <React.Fragment>
    <Header />
    <Circle
      size={120}
      style={{ position: "absolute", right: "0.75rem", top: "9rem" }}
    >
      <img src={coins} height={60} style={{ padding: "0.5rem" }} />{" "}
      <Label fontSize={24}>150</Label>
    </Circle>
    <Link to="/calendar">
      <Circle
        size={170}
        style={{ position: "absolute", left: "-0.5rem", top: "12rem" }}
      >
        <img src={calendar} height={40} style={{ padding: "0.5rem" }} />
        <Label fontSize={23}>Calendar</Label>
      </Circle>
    </Link>
    <Circle
      size={200}
      style={{ position: "absolute", left: "-1rem", bottom: "4rem" }}
    >
      <img src={friends} height={80} style={{ padding: "0rem" }} />
      <Label>Friends</Label>
    </Circle>
    <Circle
      size={240}
      style={{ position: "absolute", right: "-2rem", bottom: "9rem" }}
    >
      <img src={nextSteps} height={80} />
      <Label>Next Steps</Label>
    </Circle>
    <Circle
      size={140}
      style={{ position: "absolute", right: "-2rem", bottom: "-2rem" }}
    >
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
  box-shadow: 5px -5px rgba(69, 91, 99, 0.08);
`;

const Label = styled.div`
  font-family: Lato;
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : `25px`)};
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
