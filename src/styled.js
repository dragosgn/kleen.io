import styled, { css } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const RawButton = styled.button`
  padding: 1rem 6rem;
  font-size: 1.25rem;
  color: white;
  background-color: ${props =>
    props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  border-radius: 12px;
  border: 1px solid
    ${props =>
      props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  max-width: 80%;
`;

const linkCss = css`
  padding: 1rem 6rem;
  font-size: 1.25rem;
  text-decoration: none;
  border-radius: 12px;
`;

export const SecondaryLink = styled(Link)`
  ${linkCss};
  color: white;
  background-color: ${props => props.theme.secondaryColor};
  border: 1px solid ${props => props.theme.secondaryColor};
`;

export const PrimaryLink = styled(Link)`
  padding: 1rem 6rem;
  font-size: 1.25rem;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.primaryColor};
  text-decoration: none;
`;

export const Button = ({ label, primary, secondary }) => (
  <RawButton secondary={secondary} primary={primary}>
    {label}
  </RawButton>
);
