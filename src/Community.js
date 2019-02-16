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
        size={180}
        style={{ position: "absolute", left: "3rem", top: "7rem" }}
      >
        <img src={message} height={80} style={{ padding: "0rem" }} />
      </Circle>
      <Circle
        size={210}
        style={{ position: "absolute", left: "-1.5rem", bottom: "2rem" }}
      >
        <img src={lotus} height={80} style={{ padding: "0rem" }} />¡{" "}
      </Circle>
      <Circle
        size={250}
        style={{ position: "absolute", left: "-1.5rem", bottom: "1rem" }}
      >
        <img src={volunteer} height={80} style={{ padding: "0rem" }} />
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
