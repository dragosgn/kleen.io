import styled from "styled-components";
import React from "react";

let RawButton = styled.button`
  padding: 1rem 6rem;
  font-size: 1.25rem;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.primaryColor};
  max-width: 80%;
`;

export const Button = ({ label }) => <RawButton>{label}</RawButton>;
