import { FC } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const buttons = ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "-"];
const operators = ["/", "*", "+", "-"];

const InputWrapper = styled.div`
  width: 100%;
  height: 300px;

  background-color: lightgray;

  display: flex;
  .inputs {
    flex: 3;
  }
  .operators {
    flex: 1;
  }
`;

interface Props {
  addOperation: (operation: string) => void;
}

export const Inputs: FC<Props> = ({ addOperation }) => {
  return (
    <InputWrapper>
      <div className="inputs">
        {buttons.map((value, i) => {
          return (
            <Button
              key={value + i}
              addOperation={addOperation}
              value={value}
              operator={false}
            />
          );
        })}
      </div>
      <div className="operators">
        {operators.map((value, i) => {
          return (
            <Button
              key={value + i}
              addOperation={addOperation}
              value={value}
              operator={true}
            />
          );
        })}
      </div>
    </InputWrapper>
  );
};
