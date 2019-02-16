import React from "react";
import styled from "styled-components";

import { Header } from "./styled";

import family from "./family.png";
import institution from "./institution.png";
import housing from "./institution.png";
import welfare from "./money.png";

const size = 250;
const doubleSize = size * 2;

const HalfCircle = styled.div`
  background: ${props => props.theme.secondaryColor};
  display: inline-block;
  margin: 0 1em 1em 0;
  height: ${doubleSize}px;
  width: ${size}px;
  border-bottom-right-radius: ${doubleSize}px;
  border-top-right-radius: ${doubleSize}px;
  position: fixed;
  position: relative;
  left: -45%;
  opacity: 0.15;
  z-index: -1;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  width: 80%;
  position: fixed;
  margin-top: 3.5rem;
`;

export default () => (
  <React.Fragment>
    <Header label="next steps" style={{}} />
    <HalfCircle />
    <Root>
      <RenderLabels label={"Housing"} icon={housing} />

      <RenderLabels label={"Family"} icon={family} left={"2.5rem"} />
      <RenderLabels label={"Welfare"} icon={welfare} left={"2.5rem"} />

      <RenderLabels label={"Institutions"} icon={institution} />
    </Root>
  </React.Fragment>
);

const IconLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  text-transform: uppercase;
  align-content: center;
  align-items: center;
  margin: 1.25rem;
  padding-left: ${props => props.left && props.left};
`;

const RenderLabels = ({ label, icon, left }) => (
  <IconLabel left={left}>
    <SmallCircle>
      <img src={icon} height={45} />
    </SmallCircle>

    <Label>{label}</Label>
  </IconLabel>
);

const SmallCircle = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 2.5px 2.5px 2.5px 2.5px rgba(69, 91, 99, 0.08);
`;

const Label = styled.div`
  color: ${props => props.theme.secondaryColor};
  padding-left: 1rem;
`;
