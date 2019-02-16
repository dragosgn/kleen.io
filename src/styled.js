import styled, { css } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const elWidth = 269;
const elHeight = 36;

const elPadding = `0.5rem 1rem;`;

const RawButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  border-radius: 12px;
  height: ${elHeight}px;
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
  height: ${elHeight}px;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-decoration: none;
  border-radius: 12px;
  width: ${elWidth}px;
  padding: ${elPadding};
  color: white;
`;

export const Input = styled.input`
  border-radius: 12px;
  box-shadow: 0 4px 16px 0 rgba(69, 91, 99, 0.08);
  background-color: #ffffff;
  border: 1px transparent;
  width: ${elWidth}px;
  padding: ${elPadding};
  margin: 1rem;
  height: ${elHeight}px;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: 1rem;
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
  text-transform: uppercase;
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

export const Name = styled.p`
  color: ${props => props.theme.primaryColor};
  font-size: 26px;
  font-weight: 600px;
  text-align: center;
  margin: 0.5rem;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

export const LogoBoxSec = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const Logo = styled.img``;

export const Icon = styled.i`
  color: white;
  font-size: ${props => (props.size ? `${props.size}px` : `32px`)};
`;
