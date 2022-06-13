// Ternary operators
  //condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
  return a === b ? true : false; // pointless code because a === b does the same thing
}
console.log(checkEqual(1,2));

// Nesting ternary operators

function checkSign(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
  // if the first condition is false, check the second condition
}
console.log(checkSign(-5));