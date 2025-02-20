const calculatorDisplay = document.querySelector(".display");

const oppositeButton = document.querySelector(".opposite-button");
const decimalButton = document.querySelector(".decimal-button");
const acButton = document.querySelector(".ac-button");
const equalButton = document.querySelector(".equal-button");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

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

function modulo(firstNumber, secondNumber) {
  return firstNumber % secondNumber;
}

function operate() {
  let number1 = parseFloat(firstOperand);
  let number2 = parseFloat(secondOperand);
  switch (operator) {
    case "+":
      currentValue = add(number1, number2);
      break;
    case "-":
      currentValue = subtract(number1, number2);
      break;
    case "*":
      currentValue = multiply(number1, number2);
      break;
    case "/":
      currentValue = divide(number1, number2);
      break;
    case "%":
      currentValue = modulo(number1, number2);
      break;
  }
}

function populateDisplay() {
  calculatorDisplay.textContent = currentValue;
}

function addDecimal() {
  if (currentValue.length < 8 && decimal === false) {
    currentValue += ".";
    decimal = true;
    populateDisplay();
  }
}

function backspace() {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
  } else {
    currentValue = "0";
  }
  if (!currentValue.includes(".")) {
    decimal = false;
  }
  populateDisplay();
}

function updateCurrentValue(element) {
  if (currentValue === "0") currentValue = element.textContent;
  else if (currentValue.length < 9) currentValue += element.textContent;
}

function updateOperands() {
  if (operator != null) evaluate();
  firstOperand = currentValue;
  currentValue = "0";
  decimal = false;
}

function resetValues() {
  firstOperand = null;
  operator = null;
  secondOperand = null;
  decimal = false;
  currentValue = "0";
}

function evaluate() {
  secondOperand = currentValue;
  operate();
  populateDisplay();
  firstOperand = currentValue;
  operator = null;
  secondOperand = null;
}

let firstOperand = null,
  operator = null,
  secondOperand = null,
  decimal = false,
  currentValue = "0";

oppositeButton.addEventListener("click", () => {
  let aux = parseFloat(currentValue);
  aux = -aux;
  currentValue = aux.toString();
  populateDisplay();
});

decimalButton.addEventListener("click", () => {
  addDecimal();
});

acButton.addEventListener("click", () => {
  resetValues();
  populateDisplay();
});

equalButton.addEventListener("click", () => {
  evaluate();
});

numberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    updateCurrentValue(element);
    populateDisplay();
  });
});

operatorButtons.forEach((element) => {
  element.addEventListener("click", () => {
    updateOperands();
    operator = element.textContent;
    calculatorDisplay.textContent = operator;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    backspace();
  }
});
