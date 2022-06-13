// Random fraction generation (between 0 and 1)
function randomFraction() {
  return Math.random();
}
console.log(randomFraction());

// Random whole number
  // Math.floor  rounds down to the nearest whole number
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNumber() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber());

// Random numbers in a range

function ourRandomRange(min, max) {
  return Math.floor(Math.random() * (max-min + 1)) + min;
}
var random = ourRandomRange(5, 14);
console.log(random);