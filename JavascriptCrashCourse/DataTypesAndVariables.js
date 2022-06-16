/* Data types:
undefined, null, boolean, string, symbol, number, object
*/

var myName = "Ryan";

myName = 8;

let ourName = "Hello Sir";

const pi = 3.14;

console.log(a); //can check values of vertain variables at different times in code
// Declare variables:
var a;

// Assign variables:
a = 2;

//Declare and assign (initialise) variables:
var b = 7;
var c = 10;
var d = 15;
console.log(b);

//Seeing things in the consol
console.log(a);

//Incrementing numbers, can do ++ or --
b++;
console.log(b);

// Remainders
var remainder;
remainder = 11 % 3;
console.log(remainder);

// Using += to assign new variable after math operation
a += 7;
b -= 4;
c *= 2;
d /= 5;

// Strings
var myFirstName = "Ryan";

//Individual characters in strings cannot be changed once they are set

// Quotes within strings - use back slash to signify that the string is ongoing
// Can also assign your string using single quotation marks ''
var string = "Hello my \"name is\" Ryan!";

// Adding strings together with +
// Can also use the += operator
  // This can also be done with two variables
var ourString = "This is the first string. " + "This is the second string.";

// Add variables into string display
var myName = "Ryan";
var introduction = "Hello, my name is " + myName + ". It is nice to meet you!";
console.log(introduction);

// Length of a string
var firstNameLength = 0;
var firstName = "Madison";
firstNameLength = firstName.length;
console.log(firstNameLength);

//Finding any character within a string - change the [0]
var firstLetterOfFirstName = "";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

//Finding the last character in a string - can be used if length of string is unknown 
var lastLetterOfFirstName = firstName[firstNameLength - 1];
console.log(lastLetterOfFirstName);

//Word Blanks (?) - using functions
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myAdverb + " to the store.";
  return result;
}
console.log(wordBlanks("cat", "cute", "house", "flew"))

// Arrays
var ourArray = ["Ryan", 23];
console.log(ourArray);

// Nested array
var myArray = ["Boo!", [1,2,3]]
console.log(myArray);

// Accessing array data with []
var arrayItemOne = myArray[0];
console.log(arrayItemOne);

// Modifying array data
var newArray = [12,24,36];
newArray[2] = 48;
console.log(newArray);

// Multidimensional arrays (3D objects)
var threeDimensionArray = [[1,2,3], [4,5,6], [[7,8,9], 10,11]];
console.log(threeDimensionArray[2][0][1]); // accessing the 789 array

// Adding to arrays with push()
  // Adds an element to the end of the array
var myArrayAgain = ["Homer", "Simpson"];
myArrayAgain.push("Marge", "Lisa"); // can add individual items or nest arrays
console.log(myArrayAgain);

// Manipulating arrays with pop() (also returns the value?)
  // Removes the last element
  // Can be used to remove items from selections after being picke
    // Random picker removes item kinda thing
myArrayAgain.pop(); //can also set this to a variable
console.log(myArrayAgain);

// Manipulate arrays with shift()
  // Removes the first element
myArrayAgain.shift();
console.log(myArrayAgain);

// Manipulate arrays with unshift()
  // Adds element to the beginning of the array
myArrayAgain.unshift("Bart");
console.log(myArrayAgain);

// Converting a string to an array
array.split('');

// Reversing an array
array.reverse();

// Converting an array to a string
array.join('');

// Array.fill(x) - fills an array with x
Array(array.length).fill(x);

// Array.map - maps changes to an array
return array.map(elem => elem * x);

// Array.filter - allows for filtering of arrays under a condition "x"
array.filter(elem => elem !== x);
array.filter(elem => elem === x);

// Comparing let vs const vs var!
  // let does not let you declare a variable twice
  // let variables cannot be changed or reassigned using the keyword let again, ie:
  // let catName = "Scout";
  // let catName = "Harry"; this will cause an error in the code and not let you use the same variable name
  let petName = "Carrot";
  petName = "Scout"; //this is how to reassign the variable

  // var is declared globally or locally within a function
  // let is declared within the scope of block statement {} or expression it is declared in

  // const keyword
    // read only, cannot be reassigned
    //const assignments often use capital letters, ie
    // const PERMANENT = 7;

  // using const with arrays - possible to mutate

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);

// Preventing object mutation
  // Used if you don't want any items within object to change
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Object literals
/* 
const createPerson1 = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};
  The above code can also be written as below, significantly shorter and more concise */
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Ryan Comito", 22, "male"));