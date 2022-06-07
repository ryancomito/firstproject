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

//