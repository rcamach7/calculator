import React, { useState } from "react";
import styled from "styled-components";
import Screen from "./components/Screen";
import { Inputs } from "./components/Inputs";
import { Clear } from "./components/Clear";

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: grey;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalculatorWrapper = styled.div`
  width: 300px;
  height: 425px;

  outline: auto;
`;

interface CalcState {
  value: number;
  operations: string[];
}

function Calculator() {
  const [state, setState] = useState<CalcState>({ value: 0, operations: [] });

  return (
    <Backdrop>
      <CalculatorWrapper>
        <Screen />
        <Inputs />
        <Clear />
      </CalculatorWrapper>
    </Backdrop>
  );
}

export default Calculator;
