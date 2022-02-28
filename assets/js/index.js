const calculator = document.getElementById("calculator");
const display = document.getElementById("display");

calculator.addEventListener("click", (e) => {
  const operators = ["+", "-", "x", "÷", "^"];
  const btnClear = e.target.className === "clear";
  const btnNumber = e.target.className === "number";
  const btnOperator = e.target.className === "operator";
  const btnEqual = e.target.className === "equal";

  if (btnClear && display.value !== "") display.value = "";

  if (btnNumber && !btnOperator) {
    const key = e.target.innerText;
    display.value += key;
  }

  if (btnOperator && display.value !== "") {
    if (operators.includes(display.value[display.value.length - 1])) {
      display.value = display.value.slice(0, -1);
      display.value += e.target.innerText;
    } else display.value += e.target.innerText;
  }

  if (btnEqual) {
    const expression = display.value
      .replace(/x/g, "*")
      .replace(/÷/g, "/")
      .replace(/\^/g, "**");

    const resultOfExpression = eval(expression);

    resultOfExpression
      ? (display.value = resultOfExpression)
      : (display.value = "Error");
  }
});
