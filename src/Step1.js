import React from "react";
import styled from "styled-components";

export default () => (
  <React.Fragment>
    <Slogan>Together is always better!</Slogan>
    <HalfCircle />
  </React.Fragment>
);

const size = 250;

const doubleSize = size * 2;

const Slogan = styled.div`
  color: ${props => props.theme.primaryColor};
  font-size: 36px;
  text-align: center;
`;

const HalfCircle = styled.div`
  background: ${props => props.theme.primaryColor};
  display: inline-block;
  margin: 0 1em 1em 0;
  height: ${doubleSize}px;
  width: ${size}px;
  border-bottom-right-radius: ${doubleSize}px;
  border-top-right-radius: ${doubleSize}px;
  position: fixed;
  position: relative;
  left: -45%;
`;
