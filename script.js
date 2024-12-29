const calculatorDisplay = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");

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
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
      break;
    case "-":
      return subtract(firstOperand, secondOperand);
      break;
    case "*":
      return multiply(firstOperand, secondOperand);
      break;
    case "/":
      return divide(firstOperand, secondOperand);
      break;
  }
}

function populateDisplay() {
  calculatorDisplay.textContent = currentValue;
}

function updateCurrentValue(element) {
  if (currentValue === "0") currentValue = element.textContent;
  else if (currentValue.length < 9) currentValue += element.textContent;
}

let firstOperand = null,
  operator = null,
  secondOperand = null,
  currentValue = "0";

numberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    updateCurrentValue(element);
    populateDisplay();
  });
});
