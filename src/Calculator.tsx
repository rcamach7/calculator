import { useEffect, useState } from "react";
import styled from "styled-components";
import Screen from "./components/Screen";
import { Inputs } from "./components/Inputs";
import { Clear } from "./components/Clear";
import { CalcState } from "./models";

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

function Calculator() {
  const [state, setState] = useState<CalcState>({ value: 0, operations: [] });

  const clear = () => setState({ value: 0, operations: [] });

  const addOperation = (operation: string) => {
    setState((state) => {
      let operations = [...state.operations];
      operations.push(operation);

      return { ...state, operations };
    });
  };

  // useEffect(() => {
  //   const calculateValue = () => {
  //     const val = state.operations.reduce((total, currentOperator, i) => {
  //       return "";
  //     });
  //   };
  //   calculateValue();
  // }, [state.operations]);

  useEffect(() => {
    console.log(state.operations);
  }, [state.operations]);

  return (
    <Backdrop>
      <CalculatorWrapper>
        <Screen state={state} />
        <Inputs addOperation={addOperation} />
        <Clear clear={clear} />
      </CalculatorWrapper>
    </Backdrop>
  );
}

export default Calculator;
