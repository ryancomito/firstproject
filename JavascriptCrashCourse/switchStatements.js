// Switch statements 
  // Used instead of chained else if statement
  // All cases use ===
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1: // is val === 1 ?
      answer = "alpha";
      break; // break out of switch statement
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "charlie";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(2));

// Default options
  // Kind of like else in if else statements