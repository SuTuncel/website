/*
// oop
const car = {
    model: "Mustang",
    color: "Red",
    year: 2023,

    drive: function(){
        console.log("You drive the car");
    },

    brake: function(){
        console.log("You step on the brakes");
    }
}

console.log(car.model);
console.log(car.color);
car.brake;

//class 

class Player{
    score = 0; 

    pause(){
        console.log("Paused");
    }

    exit(){
        console.log("Exited");
    }
}

const player1 = new Player();

player1.score += 1; 
console.log(player1.score);

player1.exit();

// constructor 

class Student{
    constructor(name, age, gpa) {
        this.name = name; 
        this.age = age; 
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Bob", 30, 3.2);
console.log(student1.name);
console.log(student1.age);
student1.study();

// static key

class Car {
   static numberofCars = 0; 

   constructor(model) {
        this.model = model;
        Car.numberofCars += 1; 

   }

   static startRace(){
    console.log("3..2..1...GO!")
   }
}

const car1 = new Car("Mustang");
const car2 = new Car("BMW");
const car3 = new Car("Ford");

console.log(Car.numberofCars);
Car.startRace();

// inheritance and super keyword

class Animal{
    alive = true;

    constructor(name, age){
        this.name = name; 
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

}

class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

}

class Bird extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 50);
const bird = new Bird("bird", 4, 35);

console.log(rabbit.alive);
console.log(fish.name);
console.log(bird.flySpeed);
console.log(rabbit.age);


// getter and setter 

class Car{
    constructor(power, name, year, color){
        this._gas = 25;
        this._name = name;
        this._year = year; 
        this._color = color;
        this._power = power; //protected property 
    }

    get name(){
        return `${this._name}`;
    }

    get year(){
        return `${this._year}`;
    }
    
    get color(){
        return `${this._color}`;
    }

    set color(value){
        this._color = value;
    }

    get power(){
        return `${this._power}hp`;
    }

    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }

    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value; 
    }

    drive(){
        console.log(`${this._name} is driving`);
    }
}

var car1 = new Car(400, "Mustang", 2023, "red");
var car2 = new Car(250, "FIAT", 2017, "black");

//displayInfo(car1);

function displayInfo(car){
    console.log(car.power);
    console.log(car.name);
    console.log(car.year);
    console.log(car.color);
}

//car.gas = 65;

//console.log(car.power);
//console.log(car.gas);
// create an array from object 

const cars = [car1, car2];

for(let i = 0; i< cars.length; i++){
    cars[i].drive();
}

startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}

// anonim objects

class Card{
    constructor(value, suit){
      this.value = value;
      this.suit = suit;  
    }
}

//var card1 = new Card("A", "Hearts");
//var card2 = new Card("A", "Spades");
//var card3 = new Card("A", "Diamonds");
//var card4 = new Card("A", "Clubs");
//var card5 = new Card("2", "Hearts");
//var card6 = new Card("2", "Diamonds");
//var card7 = new Card("2", "Spades");
//var card8 = new Card("2", "Clubs");

//var cards = [card1, card2, card3, card4, card5, card6, card7, card8];

//console.log(cards[0].value + cards[0].suit)

var cards = [ new Card("A", "Hearts"),
              new Card("A", "Spades"),
              new Card("A", "Diamonds"),
              new Card("A", "Clubs"),
              new Card("2", "Hearts"),
              new Card("2", "Diamonds"),
              new Card("2", "Spades"),
              new Card("2", "Clubs")
];

cards.forEach(card => console.log(`${card.value} ${card.suit}`));
// error handling

try{
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That is not number!";
    if(x == "") throw "That is empty!";

    console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This almays executes");
}

// setTimeout = invokes a function after a number of milliseconds

let item = "cryptocurrency"; 
let price = 420.87;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}`);
}

function secondMessage(){
    alert(`This is not a scam!`);
}

function thirdMessage(){
    alert(`DO ITTT!`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`thanks for buying`);
}

//setInterval()

let count = 0; 
let max = window.prompt("Count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
    count += 1; 
    console.log(count);

    if(count >= max){
        clearInterval(myTimer);
    }
}

// date objects 

let date = new Date();
let year = date.getFullYear();
let dayOfMnoths = date.getDate();
let dayofWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
date = date.toLocaleString();
//console.log(date);
document.getElementById("myL").innerHTML = formatTime(date); 

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`;
}

function formatTime(date){
    date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amORpm = hours >= 12 ? "PM" : "AM";

    return `${minutes}.${minutes} ${amORpm}`;
}


// console.time() = Starts a timer you can use to track how long an operation takes 

console.time("Response time");
//alert("Click the okay button");
setTimeout(() => console.log("Hello"), 3000)
console.timeEnd("Response time");

// promise 

async function loadFile(){
    let fileloaded = false; 

    if(fileloaded){
        return "File loaded";
    }
    else{
        throw "File not loaded"; 
    }

}
loadFile.then(value => console.log(value))
                .catch(error => console.log(error));

/////Promise kısmı sadece///
const promise = new Promise((resolve, reject) => {
    let fileloaded = false; 

    if(fileloaded){
        resolve("File loaded");
    }
    else{
        reject("File not loaded"); 
    }
});

promise.then((value) =>console.log(value))
            .catch(error => console.log(error));



// asyns = makes a function return a Promise 
const promise = new Promise(resolve =>{
    setTimeout(resolve, 5000);
});

promise.then(() => console.log("Thanks for waiting!"));


// await = makes an async function wait for a Promise
async function loadFile(){

    let fileLoaded = true;

    if(fileLoaded){
      return "File loaded";
   }
    else{
      throw "File NOT loaded";
   }
}

async function startProcess(){
    try{
    let message = await loadFile();
    console.log(message);
    }
    catch(error){
        alert(error);
    }
}
startProcess();

//loadFile.then((value) =>console.log(value))
  //          .catch(error => console.log(error));

  */