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

// Anonymous functions
  //The function can be written in the short hand below
// var magic = function() {
//   return new Date();
// };
const magic = () => new Date();

// Arrow functinos
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// Higher order arrow functions
  // Use arrow functions to take up significantly less space
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Default parameters
const increment = (function(){
  return function increment(number, value = 1) {
    return number + value;
  };
})();

console.log(increment(5, 2));
console.log(increment(5));

// Rest operator
const sum = (function() {
  return function sum(...args) {
    // const args = [x, y, z]; the "...args" will allow all the numbers passed into the function to be converted into an array called args
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));

// Spread operator
const arr1 = ["Jan", "Feb", "Mar"];
let arr2;
(function () {
  arr2 = [...arr1]; // will make arr2 a copy of arr1, not equal to
  arr1[0] = "potato";
})();
console.log(arr2);

// Destructuring assignment
var voxel = {x: 3.6, y:7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z; // old way of doing it

  // Destructuring - new way

var { x : i, y : j, z : k} = voxel; // i = 3.6, j = 7.4, k = 6.54

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const {tomorrow:tempOfTomorrow} = avgTemperatures;

  return tempOfTomorrow;
};

console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Destructuring in nested objects
const LOCAL_FORECAST = {
  today: {min: 72, max: 83},
  tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {tomorrow: {max: maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Destructuring assignment to assign variables from arrays
var [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let a1 = 8, b1 = 6;
(() => {
  "use strict";
  [a1, b1] = [b1, a1];
})();
console.log(a1);
console.log(b1);

// Destructuring with the rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Destructuring assingments and function parameters
const stats = {
  max: 56.78,
  std: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (function() {
  return function half({max, min}) { // use destructuring instead of inputting entire object
    return (max + min) / 2; //because only the destructured data has been inputted, there is no need to do stats.max and stats.min
  };
})();
console.log(stats);
console.log(half(stats));
