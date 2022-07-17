import styled from "styled-components";

const ButtonWrapper = styled.button<{ operator: boolean }>`
  background-color: ${(props) => (props.operator ? "orange" : "")};
  width: 75px;
  height: 75px;

  font-size: 20px;

  outline: none;
  border: none;
`;

export const Button = ({
  value,
  operator,
}: {
  value: string;
  operator: boolean;
}) => {
  return <ButtonWrapper operator={operator}>{value}</ButtonWrapper>;
};
