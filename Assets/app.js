var form = document.querySelector("form");
var display = form.elements["display"];

document.querySelector(".equal").onclick = function () {
  var result = calculate(display.value);
  display.value = result;
};

function calculate(expression) {
  var operators = /[+\-*/]/;
  var tokens = expression.split(operators);
  var operator = expression.match(operators);

  if (tokens.length < 2 || !operator) return "Error";

  var num1 = parseFloat(tokens[0]);
  var num2 = parseFloat(tokens[1]);
  let result = 0;

  switch (operator[0]) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      result = "Error";
  }

  return result;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
