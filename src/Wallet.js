import React from "react";
import styled from "styled-components";

import { Header, SecondaryLink } from "./styled";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 3000,
    xv: 2800
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2510,
    xv: 2300
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 3500,
    xv: 4500
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    xv: 3100
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    xv: 2777
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    xv: 1500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    xv: 1888
  }
];

export default () => (
  <React.Fragment>
    <Header label="kleenos wallet" />
    <Block1>
      <Coins>150</Coins>
      <ChartBox>
        <LineChart
          width={200}
          height={150}
          data={data}
          margin={{ top: 15, right: 10, left: 10, bottom: 5 }}
        >
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#665EFF" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#3ACCE1" yAxisId={1} />
          <Line type="monotone" dataKey="xv" stroke="#454f63" yAxisId={2} />
        </LineChart>
      </ChartBox>
    </Block1>
    <Block>
      <RenderLabel label="Staying strong" color="#665EFF" amount="77" />
      <Divider />
      <RenderLabel label="Being a motivator" color="#3ACCE1" amount="35" />
      <Divider />
      <RenderLabel label="Volunteering" color="#665EFF" amount="33" />
    </Block>
    {/* <SecondaryLink to="/menu">Continue</SecondaryLink> */}
  </React.Fragment>
);

const ChartBox = styled.div`
  padding-top: 2rem;
`;

const Coins = styled.div`
  font-size: 56px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.29;
  letter-spacing: normal;
  text-align: center;
  color: #454f63;
`;

const Block1 = styled.div`
  height: 250px;
  width: 80%;
  margin: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px 0 rgba(69, 91, 99, 0.08);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 12px;
  box-shadow: 0 4px 16px 0 rgba(69, 91, 99, 0.08);
  background-color: #ffffff;
`;

const RenderLabel = ({ label, amount, color }) => (
  <LabelRoot>
    <Dot color={color} />
    <Label>{label}</Label>
    <Amount>{amount}</Amount>
  </LabelRoot>
);

const Divider = styled.div`
  height: 1px;
  border-radius: 1px;
  background-color: #f4f4f6;
`;

const LabelRoot = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  align-content: center;
`;

const Label = styled.div`
  width: 125px;
  height: 16px;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #454f63;
`;

const Amount = styled.div`
  width: 18px;
  height: 16px;
  opacity: 0.98;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: right;
  color: #78849e;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background-color: ${props =>
    props.color ? props.color : props.theme.primaryColor};
`;
