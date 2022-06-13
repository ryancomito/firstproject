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
  function switchOfStuff(val) {
    var answer = "";
    switch(val) {
      case "a": 
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default: // default answer if none of the previous cases are true
        answer = "stuff";
        break;
    }
    return answer;
  }
  console.log(switchOfStuff("a"));

  // Multiple cases having the same consequence
    // Omit the break statement and code until the final case
  function sequentialSizes(val) {
    var answer = "";
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    return answer;
  }
  console.log(sequentialSizes(2));

