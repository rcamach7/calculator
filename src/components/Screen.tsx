import { FC } from "react";
import styled from "styled-components";
import { CalcState } from "../models";

const ScreenWrapper = styled.div`
  height: 100px;
  width: 100%;

  font-size: 25px;
  color: white;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: right;
  p {
    padding-right: 25px;
  }
`;

interface Props {
  state: CalcState;
}

const Screen: FC<Props> = ({ state }) => {
  return (
    <ScreenWrapper>
      <p>{state.value}</p>
    </ScreenWrapper>
  );
};

export default Screen;
