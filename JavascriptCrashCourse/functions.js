// Functions!
  // Syntax:

/* function functionName(parameter/s) {
  code to be run goes here;
}

functionName(); - calls function
*/

function newFunction() {
  console.log("Welcome to Functions:");
}

newFunction();

// Performing actions with function
function addition(a, b){
  console.log(a + b);
}

addition(2, 5);

// Global scope
var myGlobal = 10;

function fun1() {
  nonGlobalVariable = 10; 
  //Not using the var keyword here will allow the variable to be found globally; use of var will limit the scope of the variable to within the function (local scope)
  // Can have global and local variables with the same name: local variable will take precedence over global
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (nonGlobalVariable != "undefined") {
    output += " nonGlobalVariable: " + nonGlobalVariable;
  }
  console.log(output);
}
fun1();
fun2();

// Return a value with return statement
function calculation(num) {
  return num - 7;
}
console.log(calculation(15));

// Setting a variable with return from a function
var changed;
function change(num) {
  return (num + 3) * 2;
}
changed = change(5);
console.log(changed, typeof(changed));

// Queues
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArray = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("After: " + JSON.stringify(testArray));

// Booleans - true or false values
function welcomeToBooleans () {
  return true;
}

  // Returning booleans from a functions
  function isLess(a, b) {
    return a < b;
  }
  console.log(isLess(5,2));

  // Returning early from a function
  function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  console.log(abTest(16,25));

  