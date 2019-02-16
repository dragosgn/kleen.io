import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

import { Header } from "./styled";
import calendar from "./calendar.png";

export default () => (
  <React.Fragment>
    <Header />
    <Calendar />
    <Block>
      <Notification>2 weeks Strike!</Notification>
    </Block>
    <IconRow>
      <IconBox>
        <img src={calendar} height={35} />
        <Label>Appointments</Label>
      </IconBox>
      <IconBox>
        <Icon className="far fa-calendar-check" />
        <Label>Events</Label>
      </IconBox>
      <IconBox>
        <Icon className="fas fa-chart-line" />
        <Label>Progress</Label>
      </IconBox>
    </IconRow>
  </React.Fragment>
);
const IconRow = styled.div`
  display: flex;
  width: -webkit-fill-available;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Label = styled.div`
  opacity: 0.86;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  margin-top: 0.25rem;
  color: #ffffff;
`;

const IconBox = styled.div`
  width: 90px;
  height: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 8px;
  background-color: #665eff;
  border: 1px solid ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.primaryColor};
  align-items: center;
`;

const Notification = styled.div`
  font-family: Lato;
  font-size: 25px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #3acce1;
  text-align: left;
`;

const Block = styled.div`
  height: 30px;
  margin-top: 0.5rem;
  box-shadow: 0 4px 16px 0 rgba(69, 91, 99, 0.08);
  background-color: rgba(58, 204, 225, 0.11);
  width: -webkit-fill-available;
  border-radius: 8px;
  padding: 0.5rem 1rem;
`;

const Icon = styled.i`
  color: white;
  font-size: 32px;
`;
