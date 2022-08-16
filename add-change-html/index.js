
/*const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Enter your name:");

document.body.append(nameTag);
*/

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);