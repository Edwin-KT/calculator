function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate() {
  switch (operate) {
    case "+":
      return add(firstOperand, secondOperand);
      break;
    case "-":
      return subtract(firstOperand, secondOperand);
      break;
    case "*":
      break;
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
      break;
  }
}

let firstOperand = null,
  operator = null,
  secondOperand = null;
