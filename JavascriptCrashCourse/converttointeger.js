// Converting a string to an integer

function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56"));

// Using parseInt with a Radix
  // Radix specifies the base of the number

  function convertToIntegerSecond(str) {
    return parseInt(str, 2);
  }
  console.log(convertToIntegerSecond("10011"));