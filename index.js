//meeting hello world
/*
console.log("Hello World");
console.log("It's coool :)")

//variables
let firstName = "Elif"; 
let age = 21;
let student = true; // false ya da
console.log("Hello ",firstName);
console.log("You are ", age, " years old.");
console.log("Are u student? ",student);

document.getElementById("p1").innerHTML = "Hello "+firstName;
document.getElementById("p2").innerHTML = "You are "+age;
document.getElementById("p3").innerHTML = "Enrolled: "+student;

let students = 20; 
//students = students + 1; 
//console.log(students);

//Arithmatic operations
students += 1;
let extraStudents = students % 3; 
console.log(extraStudents); 

//üstte çıkan mesaj 
let username = window.prompt("What's your username");
console.log(username);

//Html kısmından textbox kullanarak alınım
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello "+ username;

}

//Type conversion 

let age = window.prompt("How old r u?");

age = Number(age);
age += 1;

console.log("Happy bday! U r ",age," years old.");
//const = variable that cant be changed

const pi = 3.14159;
let radius; 
let circumference; 
radius = Number(window.prompt("Enter the radius of a circle"));

circumference = 2* pi* radius; 
console.log(circumference);

// Math functions
let x =3.14;
let y =5; 
let z =4; 
let maximum; 
let minimum; 
const pi = Math.PI;
//x = Math.round(x);
//x = Math.floor(x); 
//x = Math.ceil(x);
// x = Math.pow(x,2); 
// x = Math.sqrt(x);
// x = Math.abs(x); 
maximum = Math.max(x,y,z);
minimum = Math.min(x,y,z);
console.log(maximum);

// Hipotenüs hesaplama 
let a = Number(window.prompt("Enter side A:")); 
let b = Number(window.prompt("Enter side B:")); 
let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)); 

console.log("Side C: ", c);

//Hipotenüs hesaplama htmlli
let a; 
let b; 
let c; 

document.getElementById("myButton").onclick = function(){
    a = Number(document.getElementById("sideA").value);
    b = Number(document.getElementById("sideB").value);
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("C").innerHTML = "Side C: "+ c; 

}


// counter yapma htmlli 

let count = 0; 
document.getElementById("decrease").onclick = function(){
    count--;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

//string işlemleri 
let username = "Anan"; 

console.log(username.length);
let firstletter= username.charAt(0); 
console.log(firstletter);
console.log(username.lastIndexOf("n"));
console.log(username.indexOf("n"));

//slice method 

let fullName = "Elif Su Tuncel";

let firstName = fullName.slice(0, fullName.indexOf(" ")); 
let lastName = fullName.slice(fullName.indexOf(" ")); 
console.log(firstName);
console.log(lastName);


//if statement 
let age = 12; 

if(age >= 18){
    console.log("You are an adult.");
}else if(age < 0){
    console.log("You haven't born yet!");
}
else{
    console.log("You are a child.");
}

// check property in js
document.getElementById("myButton").onclick = function(){
    const visaBtn = document.getElementById("visaBtn");
    const masterBtn = document.getElementById("mastercardBtn");
    const payBtn = document.getElementById("paypalBtn");

    if(document.getElementById("myCheckbox").checked){
        console.log("You are subscribed");
    }else{
        console.log("You are not subscribed");
    }

    if(visaBtn.checked){
        console.log("You are paying with visa");
    }else if(masterBtn.checked){
        console.log("You are paying with mastercard");
    }else if(payBtn.checked){
        console.log("You are paying with paypal");
    }else{
        console.log("Never selected");
    }
}
// switch yapısı 
let grade = "B";

switch(grade){
    case "A": 
        console.log("You did great!");
        break;  
    case "B": 
        console.log("You did good!");
        break;
    case "C": 
        console.log("You did okay!");
        break;
    case "D": 
        console.log("You passed!");
        break;
    case "F": 
        console.log("You failed!");
        break;
    default:
        console.log(grade, " is not a letter!");


}
//while loop 

let userName = ""; 

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name: ");
}

console.log("Hello ", userName);

// do while loop 

do{
    userName = window.prompt("Enter your name: ");
}while(userName == "" || userName == null)

// for loop 

for(let i =0; i<15; i++){
    console.log("Number: ", i); 
}
 nested loop falan javadakini aynısı 
// function 

function happyBirthday(userName, age){
    console.log("Happy Biryhday to you!");
    console.log("Happy Biryhday dear ", userName);
    console.log("Happy ", age);

}

// return function 
let area; 
let width; 
let height; 

width = window.prompt("Enter width");
height = window.prompt("Enter height");

function getArea(width, height){
    return width*height;
}

area = getArea(width, height);

console.log("Area: ", area);

// ternary operator = shortcut for an 'if/else statment'

// condition ? expressionIfTrue : expressionIfFalse

let adult = checkAge(21);

console.log(adult);

function checkAge(age){
   return age >= 18 ? true: false; // console.log da yazdırabiliyorsun 
}

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}
// global = is declared outside any function 
for(let i = 1; i<=3; i++){
    console.log(i);
}

 // template literals = delimited with (')

 let userName = "Bro"; 
 let items = 3; 
 let total = 75; 

 console.log(`Hello ${userName}`);
 console.log(`You have ${items} items`);
 console.log(`Your total is $${total}`);


 // toLocaleString() = returns a string with a language sensitive representation of this number
 let myNum = 123456.789; 
 myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
 myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

 myNum = myNum.toLocaleString(undefined, {style: "percent"});

 myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celcius"});

 console.log(myNum);

// array

var fruits = ["apple", "orange", "banana"];
console.log(fruits); // indexleriyle birlikte görünüyor
fruits[0]= "coconut"; // changes

fruits.push("lemon"); // add element
fruits.pop(); // removes last element
fruits.unshift("mango"); // add element to begining
fruits.shift(); //removes element from begning

let length = fruits.length; 
console.log(length); 

let index = fruits.indexOf("kiwi") // return -1 

// array for işlemleri 
let prices = [5, 10, 15, 20];

for(let i = 0; i< prices.length; i++){
    console.log(prices[i]);
}

for (let i = prices.length - 1; i>=0; i--){
    console.log(prices[i]);
}

for ( let price of prices){ // like python
    console.log(price); 
}

 // sorting array 
let fruits = ["banana", "apple", "orange", "mango"]

fruits = fruits.sort(); // abc order

fruits = fruits.sort().reverse(); // reversee abc order

for(let fruit of fruits){
    console.log(fruit);
}

// 2d array

let fruits = ["apples", "oranges", "bananas"];

let vegetables = ["carrots", "onions", "potatoes"];

let meats = ["eggs", "chicken" , "fish"];

let groceryList = [fruits, vegetables,meats];

groceryList[0][0] = "mangoes";
groceryList[1][2] = "steak"; 

for ( let list of groceryList){
   // console.log(list); tüm arrayleri ayrı ayrı gösteriyo 
    for(let food of list){
        console.log(food); // hepsini bir listede gösterir
    }
}

//spread operator = allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers); // direkt bastırıyor stringlerde de işe yarıyor

 let maximum = Math.max(...numbers);  // direkt maximum sayıyı gösteriyor
 console.log(maximum); 

 let class1 = ["anne", "max", "gisele"];
 let class2 = ["suzie", "mike", "ian"];

 class1.push(...class2);
 console.log(...class1);

 */