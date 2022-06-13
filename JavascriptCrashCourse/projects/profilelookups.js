var contacts = [
  {
    "firstName": "Ryan",
    "lastName": "Comito",
    "number": "0416828250",
    "likes": ["Coding", "Garlic bread", "Soccer"]
  },
  {
    "firstName": "Madison",
    "lastName": "Sexton",
    "number": "0450901157",
    "likes": ["Design", "Food", "Music"]
  },
  {
    "firstName": "Sandra",
    "lastName": "Comito",
    "number": "0403165797",
    "likes": ["Payroll", "Bulldogs", "Scout"]
  },
  {
    "firstName": "Tony",
    "lastName": "Comito",
    "number": "0403165798",
    "likes": ["Collingwood", "MCG", "Accounting"]
  }
]

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}
var data = lookUpProfile("Ryan", "number");
console.log(data);