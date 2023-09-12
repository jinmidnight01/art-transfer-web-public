import React from "react";
import styled from "styled-components";
import spinner from "../../assets/images/loading_spinner.gif";

const LoadingComponent = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  /* background-color: rgba(159, 159, 159, 0.8); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Loading = () => {
  return (
    <LoadingComponent>
      <img src={spinner} alt="loading" />
    </LoadingComponent>
  );
};

export default Loading;
