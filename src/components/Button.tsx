import { FC } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button<{ $operator: boolean }>`
  background-color: ${(props) => (props.$operator ? "orange" : "")};
  width: 75px;
  height: 75px;

  font-size: 20px;

  outline: none;
  border: none;
`;

interface Props {
  value: string;
  operator: boolean;
  addOperation: (operation: string) => void;
}

export const Button: FC<Props> = ({ value, operator, addOperation }) => {
  return (
    <ButtonWrapper $operator={operator} onClick={() => addOperation(value)}>
      {value}
    </ButtonWrapper>
  );
};
