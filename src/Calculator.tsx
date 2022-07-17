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
  const [state, setState] = useState<CalcState>({ value: "0", operations: [] });

  const clear = () => setState({ value: "0", operations: [] });

  const addOperation = (operation: string) => {
    let newOperations = [...state.operations];
    newOperations.push(operation);

    const value = calculateValue(newOperations);
    if (value.includes("operator")) {
      setState((state) => {
        let operations = [...state.operations];
        operations.push(operation);

        return { ...state, operations };
      });
    } else {
      setState((state) => {
        let operations = [...state.operations];
        operations.push(operation);

        return { value: value, operations };
      });
    }
  };

  const performOperation = (a: string, operation: string, b: string) => {
    let aNum = Number.parseInt(a);
    let bNum = Number.parseInt(b);

    if (operation === "+") {
      return aNum + bNum + "";
    } else if (operation === "-") {
      return "";
    } else if (operation === "*") {
      return "";
    } else {
      // Division
      return "";
    }
  };

  const calculateValue = (operationsIn: string[]) => {
    const val = operationsIn.reduce((curTotal, currentOperator, i) => {
      if (currentOperator.includes("operator") && i === operationsIn.length) {
        // Skip if last value entered is an operator
        return curTotal;
      } else if (curTotal.includes("operator")) {
        // Perform operation of previous
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
