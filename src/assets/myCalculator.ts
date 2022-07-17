export const MyCalculator = () => {
  const add = (a: number, b: number) => {
    return a + b;
  };

  const subtract = (a: number, b: number) => {
    return a - b;
  };

  const multiply = (a: number, b: number) => {
    return a * b;
  };

  const divide = (a: number, b: number) => {
    return a / b;
  };
  return { add, subtract, multiply, divide };
};
