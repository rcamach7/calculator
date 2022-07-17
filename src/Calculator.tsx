import { useEffect, useState } from "react";
import styled from "styled-components";
import Screen from "./components/Screen";
import { Inputs } from "./components/Inputs";
import { ClearEnter } from "./components/ClearEnter";
import { CalcState } from "./models";
import { isValidInput, performOperation } from "./assets/helpers";

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
  const [state, setState] = useState<CalcState>({ value: "0", operations: [] });

  const clear = () => setState({ value: "0", operations: [] });

  const addOperation = (operation: string) => {
    // Break away if an invalid input is pressed.
    if (!isValidInput(operation, state.operations)) return;

    // Create a collection of up to date operations.
    let newOperations = [...state.operations];
    newOperations.push(operation);

    console.log(calculateValue(newOperations));

    setState((state) => {
      let operations = [...state.operations];
      operations.push(operation);

      return { ...state, operations };
    });
  };

  const calculateValue = (operationsIn: string[]) => {
    const val = operationsIn.reduce((curTotal, currentOperator, i) => {
      if (curTotal.includes("operator")) {
        curTotal = performOperation(
          curTotal.slice(0, curTotal.indexOf("operator") - 1),
          curTotal[curTotal.indexOf("operator") - 1],
          currentOperator
        );
      } else {
        // Add current number to previous number
        curTotal = curTotal + currentOperator;
      }

      return curTotal;
    }, "");

    return val;
  };

  useEffect(() => {
    console.log(state.operations);
  }, [state.operations]);

  return (
    <Backdrop>
      <CalculatorWrapper>
        <Screen state={state} />
        <Inputs addOperation={addOperation} />
        <ClearEnter clear={clear} addOperation={addOperation} />
      </CalculatorWrapper>
    </Backdrop>
  );
}

export default Calculator;
