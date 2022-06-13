// Shopping list with nested arrays
  // Make this a simple js website?

var shoppingList = ["cereal", "milk", "apples", "eggs"];
var list = document.createElement("ol");
for (let i of shoppingList) {
  let item = document.createElement("li");
  item.innerHTML = i;
  list.appendChild(item);
}
document.getElementById("test").appendChild(list);