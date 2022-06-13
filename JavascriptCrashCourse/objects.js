// Objects!

var myDog = {
  "name": "Scout",
  "legs": 4,
  "tails": 1,
  "friends of hers": ["mabel", "madi"]
};

// Dot notation: accessing properties of objects
var dogName = myDog.name;
console.log(dogName);

// Bracket notation: accessing properties of objects
  // Required if property has a space in the name
var dogFriends = myDog["friends of hers"];
console.log(dogFriends);

//Variables: accessing properties of objects
var property = "legs";
var numberOfLegs = myDog[property];
console.log(numberOfLegs);

// Updating object properties
myDog.name = "Carrot";
console.log(myDog.name);

// Adding new properties
myDog.color = "black";
console.log(myDog.color);

// Deleting properties
delete myDog.color;
console.log(myDog);

// Using objects for lookups
  // Can be used instead of a switch statement with many cases
function phoneticLookup(val) {
  var result = "";

  var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver"
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("bravo"));

// Testing objects for properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
}

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
    }
}
console.log(checkObj("gift"));
console.log(checkObj("hello"));

// Manipulating complex objects
var myMusic = [
  {
    "artist": "Frank Ocean",
    "title": "Blonde",
    "release_year": 2016,
    "formats": ["CD", "LP"],
    "gold": true
  },
  {
    "artist": "Frank Ocean",
    "title": "Channel Orange",
    "release_year": 2012,
    "formats": {
      "CD": "2013",
      "LP": "Never released officially"
    },
    "gold": false
  }
]
console.log(myMusic);

// Accessing nested objects
  // Chain together dot or bracket notation

var frankOcean = {
  "artist": "Frank Ocean",
    "title": "Channel Orange",
    "release_year": 2012,
    "formats": {
      "CD": "2013",
      "LP": "Never released officially"
    },
    "gold": false
}

var lpRelease = frankOcean.formats.LP;
console.log(lpRelease);

// Accessing nested arrays within objects
var firstTree = myMusic[0].formats[1]
console.log(firstTree);