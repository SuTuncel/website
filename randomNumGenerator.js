let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
     x =(Math.random() * 10) + 1;
     y =(Math.random() * 10) + 1;
     z =(Math.random() * 10) + 1;
    document.getElementById("xlabel").innerHTML = "x: " + x;
    document.getElementById("ylabel").innerHTML = "y: " + y;
    document.getElementById("zlabel").innerHTML = "z: " + z;


}