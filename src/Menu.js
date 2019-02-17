import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Header } from "./styled";

import calendar from "./calendar.png"; // Tell Webpack this JS file uses this image
import friends from "./friends.png";
import coins from "./coins.png";
import nextSteps from "./next_steps.png";

export default () => (
  <React.Fragment>
    <Header />
    <Link to="/" style={{ position: "relative" }}>
      <Circle
        size={130}
        style={{ position: "absolute", left: "0rem", top: "-1.5rem" }}
      >
        <img src={coins} height={55} style={{ padding: "0.5rem" }} />{" "}
        <Label fontSize={20}>150</Label>
      </Circle>
    </Link>
    <Link to="/calendar" style={{ position: "relative" }}>
      <Circle
        size={170}
        style={{ position: "absolute", right: "2rem", top: "1rem" }}
      >
        <img src={calendar} height={45} style={{ padding: "0.5rem" }} />
        <Label fontSize={23}>Calendar</Label>
      </Circle>
    </Link>
    <Link to="/community" style={{ position: "relative" }}>
      <Circle
        size={210}
        style={{ position: "absolute", right: "-0.25rem", top: "14rem" }}
      >
        <img src={friends} height={80} style={{ padding: "0rem" }} />
        <Label>Community</Label>
      </Circle>
    </Link>
    <Link to="/next-steps" style={{ position: "relative" }}>
      <Circle
        size={230}
        style={{ position: "absolute", left: "0rem", top: "7.5rem" }}
      >
        <img src={nextSteps} height={80} />
        <Label>Next Steps</Label>
      </Circle>
    </Link>
    <Link to="/help" style={{ position: "relative" }}>
      <Circle
        size={140}
        style={{ position: "absolute", left: "4rem", top: "24rem" }}
      >
        <Label fontSize={25}>Help</Label>
      </Circle>
    </Link>
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
  position: relative;
`;
