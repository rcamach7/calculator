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
