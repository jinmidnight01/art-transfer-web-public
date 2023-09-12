import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 12px;
  background-color: #6163ff;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: white;
  font-size: 16;
  font-weight: 500;
  :hover {
    cursor: pointer;
  }
`;

const Button2 = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button2;
