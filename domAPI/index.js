/*
// DOM Document Object Model(API)
// An interface for changing the content of a page

console.log(document);

console.log(document.title);

console.log(document.URL);

document.title = "Title goes here!";

//document.location = "http://www.google.com";

document.body.style.backgroundColor = "skyblue";
document.getElementById("myDiv").innerHTML = "Hi";
*/

let element = document.getElementById("myTitle"); 
element.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits"); // like array 
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})

let vegetables = document.getElementsByTagName("li"); 
vegetables[0].style.color="orange";
vegetables[1].style.color="gold";
vegetables[2].style.color="green";

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.color="purple";

//let element = document.querySelector("myTitle"); böyle de olur
element.style.color="lightblue";

let fruitss = document.querySelectorAll("li"); 
fruitss.forEach(fruit => {
    fruit.style.backgroundColor="yellow";
})