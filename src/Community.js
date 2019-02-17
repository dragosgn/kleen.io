import React from "react";
import styled from "styled-components";

import { Header } from "./styled";
import lotus from "./lotus.png";
import message from "./message.png";
import volunteer from "./volunteer.png";
import back from "./back.png";

export default () => (
  <React.Fragment>
    <Root>
      <Header label={"community"} />
      <Circle
        size={170}
        style={{ position: "absolute", left: "2rem", top: "10rem" }}
      >
        <img src={message} height={70} style={{ padding: "0rem" }} />
        <Label>Messages</Label>
      </Circle>
      <Circle
        size={210}
        style={{ position: "absolute", right: "-1.5rem", bottom: "10rem" }}
      >
        <img src={lotus} height={90} style={{ padding: "0rem" }} />
        <Label>Meditation</Label>
      </Circle>
      <Circle
        size={250}
        style={{ position: "absolute", left: "-1.5rem", bottom: "-1rem" }}
      >
        <img src={volunteer} height={100} style={{ padding: "0rem" }} />
        <Label>Get Engaged</Label>
      </Circle>
    </Root>
  </React.Fragment>
);

const Root = styled.div`
  background: url(${back});
  background-size: cover;
  height: 100vh;
  width: 110%;
  margin-left: -15rem;
  margin-right: -15rem;
`;

const Circle = styled.div`
  height: ${props => (props.size ? `${props.size}px` : `100px`)};
  width: ${props => (props.size ? `${props.size}px` : `100px`)};
  border: 1px solid white;
  border-radius: 50%;
  background-color: white;
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
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: ${props => props.theme.secondaryColor};
  position: relative;
`;
