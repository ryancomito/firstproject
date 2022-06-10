//If Statements
  // Syntax:

/* 
  if (condition) {
    code will run if condition is true
  }

*/

function trueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return ("No, it's false");
}

console.log(trueOrFalse(false));

// Equality operator ==
function testEqual(val) {
  if (val==12) { //Double equality sign is used for equals, single equals is assignment of value
    return "Value is equal";
  }
  return "Value is not equal";
}
console.log(testEqual("12"));

// Strict equality operator ===
  // Double equality operator attempts to change both values to an common type ie can use integer == string
  // Strict equality does not do a type conversion
function testStrict(val) {
  if (val===10) {
    return "Strictly equals";
  }
  return "Not strictly equals";
}
console.log(testStrict("10"));

// Inequality operator !=
function testNotEqual(val) {
  if (val != 99) {
    return "Not equal";
  }
  return "Equal";
}
console.log(testNotEqual(10));

// Strict inequality operator !==
function testNotEqual(val) {
  if (val !== 50) {
    return "Not equal";
  }
  return "Equal";
}
console.log(testNotEqual("50"));

// Logical operators < > <= >=
function testLogicalOperator(val) {
  if (val > 10) {
    return "Above 10"
  }
  return "Less than or equal to 10";
}
console.log(testLogicalOperator(11));

// Using AND (&&) - Comparing with logical operators
function compareLogicalOperator(val) {
  if (val <= 50 && val >=25) { //double && is used for AND
    return "Value is between 25 and 50, inclusive"
  }
  return "Value is below 25 or above 50!"
}
console.log(compareLogicalOperator(30));

// Using OR (||) - Comparing with logical operators
function compareLogicOperator(val) {
  if (val > 50 || val < 25) { //double && is used for AND
    return "Outside 50 and 25"
  }
  return "Inside"
}
console.log(compareLogicOperator(30));

// Else statements
function elseStatement(val) {
  var result = "";
  if (val > 5) {
    result = "Greater than 5";
  } else {
    result = "5 or smaller"
  }
  return result;
}
console.log(elseStatement(4));

// Else if statements - multiple conditions
  // Order is important
  // Place the most specific of cases first because they will be executed before anything else, and continue until the most general case
function elseIfStatement(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(elseIfStatement(11));

