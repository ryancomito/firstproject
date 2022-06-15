console.log("Beginner Challenges")

// Question 1 - addition
function addition(a,b) {
  return a + b;
}
console.log(addition(-2,-4))

// Question 2 - hours into seconds
const hoursIntoSeconds = (hours) => {
  return hours*60*60;
}
console.log(hoursIntoSeconds(10))

// Question 3 - perimeter of a rectangle
const calcPerimeter = (l, w) => {
  return l*2 + w*2;
}
console.log(calcPerimeter(6,7))

// Question 4 - area of a triangle
const calcTriangleArea = (base, height) => {
  return 0.5 * base * height;
}
console.log(calcTriangleArea(10,10))

// Question 5 - add Ryan to the end of any string
const appendString = (string) => {
  return string + "Ryan";
}
console.log(appendString("Hello"))

// Question 6 - greater than 100?
  // Solution 1 - not ideal
const sumGreaterThan100 = (a, b) => {
  if (a+b > 100) {
    return true;
  }
return false;
}
console.log(sumGreaterThan100(30,51))

  // Solution 2 - better
const sumGreaterThan100Second = (a, b) => {
  return a+b > 100;
}
console.log(sumGreaterThan100Second(40,51))

// Question 7 - less than or equal to zero
const lessThanOrEqualToZero = (a) => {
  return a <= 0;
}
console.log(lessThanOrEqualToZero(-1))

// Question 8 - return opposite boolean
const oppositeBoolean = (a) => {
  return !a; // return opposite, no need for if else statement
}
console.log(oppositeBoolean(false))

// Question 9 - not the number 0
const isNotZero = (a) => {
  return a !== 0;
}
console.log(isNotZero(0))

// Question 10 - remainder between 2 values
const calcRemainder = (a,b) => {
  return a % b;
}
console.log(calcRemainder(9,8))

// Question 11 - is a number odd
const isOdd = (a) => {
  return a % 2 !== 0;
}
console.log(isOdd(1))

// Question 12 - if a number is even, return 1, otherwise return -1
  // ternary operator
const booleanInteger = (a) => {
  return a % 2 === 0 ? 1 : -1;
}
console.log(booleanInteger(2))

// Question 13 - is a suer logged in AND subscribed
const isLoggedInAndSubscribed = (a,b) => {
  return a === "LOGGED_IN" && b === "SUBSCRIBED";
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"))