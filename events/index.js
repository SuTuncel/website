/*
const element = document.getElementById("myBtn"); 
element.onclick = doSomething;

const element1 = document.body;
element1.onload = doSomething;

const element = document.getElementById("myText");
element.onchange = doSomething;

const element = document.getElementById("myDiv");
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;
function doSomething(){
    //alert("you did something");
    element.style.backgroundColor= "red";
}

function doSomethingElse(){
    //alert("you did something");
    element.style.backgroundColor= "aquamarine";
}
*/

// .addEventListener

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");


innerDiv.addEventListener("click", changeGreen);
outerDiv.addEventListener("click", changeGreen,true);

/*
innerDiv.addEventListener("mouseout", changeBlue);

function changeGreen(){
    innerDiv.style.backgroundColor = "lightgreen";
}

function changeBlue(){
    innerDiv.style.backgroundColor = "lightblue";
}*/

function changeGreen(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightgreen";
}
