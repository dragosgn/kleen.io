import React from "react";
import styled from "styled-components";

const Octagon = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  :before {
    content: "";
    width: 100px;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 29px solid red;
    border-left: 29px solid #eee;
    border-right: 29px solid #eee;
  }
  :after {
    content: "";
    width: 100px;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 29px solid red;
    border-left: 29px solid #eee;
    border-right: 29px solid #eee;
  }
`;

export default () => <Octagon />;
