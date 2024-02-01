// Higher Order Functions let us avoid hardcoding
// make the function more versitile
// better readability, maintainability
// customized code with good readability

function calculate(callback, a, b) {
  return callback(a, b);
}
function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

console.log(calculate(add, 5, 1));
