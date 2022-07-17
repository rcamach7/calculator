import { FC } from "react";
import styled from "styled-components";

const ClearWrapper = styled.div`
  height: 75px;
  width: 100%;

  background-color: darkgray;

  font-size: 20px;

  display: flex;
  button {
    outline: none;
    border: none;
    background-color: inherit;
  }
  #clear {
    flex: 3;
  }
  #enter {
    flex: 1;
    border-left: solid black 1px;
  }
`;

interface Props {
  clear: () => void;
  addOperation: (operator: string) => void;
}

export const ClearEnter: FC<Props> = ({ clear, addOperation }) => {
  return (
    <ClearWrapper>
      <button id="clear" onClick={() => clear()}>
        Clear
      </button>
      <button id="enter" onClick={() => addOperation("enter")}>
        Enter
      </button>
    </ClearWrapper>
  );
};
