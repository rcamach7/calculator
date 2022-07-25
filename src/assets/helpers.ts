import { MyCalculator } from "./myCalculator";

export const isValidInput = (newInput: string, operations: string[]) => {
  let lastOperation = operations.length
    ? operations[operations.length - 1]
    : "";

  // Can't begin calculation with an operator
  if (lastOperation === "" && newInput.includes("operator")) {
    return false;
  }

  // No consecutive operators or negative/decimal inputs allowed.
  if (lastOperation.includes("operator") && newInput.includes("operator")) {
    return false;
  } else if (lastOperation.includes("-") && newInput.includes("-")) {
    return false;
  } else if (lastOperation.includes(".") && newInput.includes(".")) {
    return false;
  } else {
    return true;
  }
};

export const performOperation = (a: string, operation: string, b: string) => {
  const calc = MyCalculator();
  let aNum = Number.parseInt(a);
  let bNum = Number.parseInt(b);

  if (operation === "+") {
    return calc.add(aNum, bNum) + "";
  } else if (operation === "-") {
    return calc.subtract(aNum, bNum) + "";
  } else if (operation === "*") {
    return calc.multiply(aNum, bNum) + "";
  } else {
    return calc.divide(aNum, bNum) + "";
  }
};

function getOperator(input: string[]) {
  if (input.includes("+operator")) return "+";
  if (input.includes("-operator")) return "-";
  if (input.includes("/operator")) return "/";
  return "*";
}

export function getResult(input: string[]) {
  let value = "";
  if (input.indexOf("enter") === -1) {
    value = input.reduce((total, current) => {
      current.includes("operator") ? (total += current[0]) : (total += current);
      return total;
    });
  } else {
    value = input.reduce((total, current) => {
      if (current.includes("enter")) return total;
      return total + current;
    });

    let numberOne = value.substring(0, value.indexOf("operator") - 1);
    let numberTwo = value.substring(value.indexOf("operator") + 8);
    let operator = getOperator(input);
    return performOperation(numberOne, operator, numberTwo);
  }
  return value;
}
