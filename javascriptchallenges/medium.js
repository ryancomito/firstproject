console.log("Medium Challenges")

// Question 1 - falsy or truthy?
const filterOutFalsy = (a,b) => {
  return !a ? a : b;
}
console.log(filterOutFalsy(true,"dog"))

// Question 2 - length of a given array
const arrLength = (a) => {
  return a.length;
}
console.log(arrLength([1,2,3,4,5,6,7]))

// Question 3 - get last element of array
const lastElem = (a) => {
  return a[a.length - 1];
}
console.log(lastElem([1,2,3,4,5]))

// Question 4 - sum of an array
const arrSum = (arr) => {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += (arr[i]);
  }
  return sum;
}
console.log(arrSum([1,2,3,4,5,6,7,8]))

// Question 5 - add up all numbers to a given number
const progressiveSum = (a) => {
  let sum = 0;
  for (i = 0; i <= a; i++) {
    sum += i;
  }
  return sum;
}
console.log(progressiveSum(30))

// Question 6 - calculate time in mm:ss format when given seconds
const calcTime = (a) => {
  let minutes = Math.floor(a / 60);
  let seconds = a % 60;

  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds
}
console.log(calcTime(70))

// Question 7 - largest number in an array
const getMax = (a) => {
  var number = 0;
  for (i = 0; i <= a.length - 1; i++) {
    if (a[i] > number) {
      number = a[i];
    }
  }
  return number;
}
console.log(getMax([23,19,10,2000]))

// Question 8 - reverse a string
  // Solution 1 - decrementing loop
const reverseString1 = (a) => {
  let newString = '';
  for (let i = a.length -1; i >= 0; i--) {
    newString += a[i];
  }
  return newString;
}
console.log(reverseString1("Ryan"))

  //Solution 2 - incrementing loop
const reverseString2 = (a) => {
  let newString = '';
  for (let i = 0; i < a.length; i++) {
    newString = a[i] + newString;
  }
  return newString;
}
console.log(reverseString2("Ryan"))

  // Solution 3 - array reverse property
const reverseString3 = (a) => {
  let b = a.split('').reverse().join('');
  return b;
}
console.log(reverseString3("Ryan"))

// Question 9 - every element in an array to 0
  // Solution 1 - for loop
const convertToZero1 = (a) => {
  for (let i = 0; i < a.length; i++) {
    a[i] = 0;
  }
  return a;
}
console.log(convertToZero1([1,2,3,4,5]))

  // Solution 2 - array fill
const convertToZero2 = (a) => {
  return new Array(a.length).fill(0);
}
console.log(convertToZero2([1,2,3]))

  // Solution 3 - array map
const convertToZero3 = (a) => {
  return a.map(elem => 0);
}
console.log(convertToZero3([1,2,3,4,5,6,7,8]))

// Question 10 - filter out a certain string
  // Solution 1 - for loop
const removeApples1 = (array) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] !== "apple"){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(removeApples1(["apple", "banana", "orange"]))

  // Solution 2 - array.filter
const removeApples2 = (array) => {
  return array.filter(elem => elem !== "apple");
}
console.log(removeApples2(["apple", "banana", "orange"]));

// Question  11 - filter out falsy values
  // Solution 1 - for loop
const filterOutFalsyValues1 = (arr) => {
  let newArray = [];
  for (i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(filterOutFalsyValues1(["",[],0,null,undefined,"0",500]))

  //Solution 2 - array.filter
const filterOutFalsyValues2 = (arr) => {
  return arr.filter(elem => !!elem === true);
}
console.log(filterOutFalsyValues2(["",[],0,null,undefined,"0",500]))

// Question 12 - return boolean values in an array
  // Can be done easily with array.map
const convertToBoolean1 = (arr) => {
  return arr.map(elem => !!elem);
}
console.log(convertToBoolean1(["",[],0,null,undefined,"0",500]))

  // Can do in a for loop
const convertToBoolean2 = (arr) => {
  let newArray = [];
  for (i = 0; i < arr.length; i++) {
    newArray.push(!!arr[i]);
  }
  return newArray;
}
console.log(convertToBoolean2(["",[],0,null,undefined,"0",500]))