import React from "react";
import styled from "styled-components";

const ClearWrapper = styled.button`
  height: 75px;
  width: 100%;

  background-color: darkgray;
  outline: none;
  border: none;

  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Clear = () => {
  return <ClearWrapper>Clear</ClearWrapper>;
};
