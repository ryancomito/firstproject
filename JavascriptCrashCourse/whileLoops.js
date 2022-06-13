// While loops

var myArray = [];

var i = 0;
while (i <= 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

// Iterating with loops
  //Syntax
/*
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
*/

var ourArray = [];
for (var i = 0; i < 10; i++) {
  ourArray.push(i)
}
console.log(ourArray);

// Iterating with a different step
var mySecondArray = [];
for (let i = 0; i <= 10; i += 2) {
  mySecondArray.push(i);
}
console.log(mySecondArray);

// Counting backwards with a for loop
var myThirdArray = [];
for (let i = 0; i > -10; i -= 2) {
  myThirdArray.push(i);
}
console.log(myThirdArray);

// Iterate through an array with a for loop
var myNewArray = [7,-3,13,7,-9];
var ourTotal = 0;

for (let i = 0; i < myNewArray.length; i++) {
  ourTotal += myNewArray[i];
}
console.log(ourTotal);

// Nesting for loops
  // Multidimensional array or nested arrays

function multiplyAll(arr) {
  var product = 1;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}

  return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(product);