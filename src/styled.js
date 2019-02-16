import styled from "styled-components";
import React from "react";

let RawButton = styled.button`
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

export const Button = ({ label, primary, secondary }) => (
  <RawButton secondary={secondary} primary={primary}>
    {label}
  </RawButton>
);
