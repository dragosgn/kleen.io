import styled, { css } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const elWidth = 290;
const elPadding = `0.5rem 1rem;`;

const RawButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  border-radius: 12px;
  height: 52px;
  width: ${elWidth}px;
  color: white;
  padding: ${elPadding};
  background-color: ${props =>
    props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  border: 1px solid
    ${props =>
      props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
`;

const linkCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  border-radius: 12px;
  height: 52px;
  width: ${elWidth}px;
  padding: ${elPadding};
  color: white;
`;

export const Input = styled.input`
  border-radius: 12px;
  box-shadow: 0 4px 16px 0 rgba(69, 91, 99, 0.08);
  background-color: #ffffff;
  border: 1px transparent;
  height: 52px;
  width: ${elWidth}px;
  padding: ${elPadding};
  margin: 1rem;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: 0.3px;
    text-align: left;
    color: #78849e;
  }
`;

export const SecondaryLink = styled(Link)`
  ${linkCss};
  background-color: ${props => props.theme.secondaryColor};
  border: 1px solid ${props => props.theme.secondaryColor};
`;

export const PrimaryLink = styled(Link)`
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
`;

export const Button = ({ label, primary, secondary }) => (
  <RawButton secondary={secondary} primary={primary}>
    {label}
  </RawButton>
);
