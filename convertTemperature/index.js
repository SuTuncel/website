document.getElementById("button").onclick = function(){

    let temp; 

    if(document.getElementById("cButton").checked){
         let temp = Number(document.getElementById("textbox").value);
        temp = toCelcius(temp);
         document.getElementById("tempLabel").innerHTML = "Celcius: "+ temp +"°C"
    }
    else if(document.getElementById("fButton").checked){
        let temp = Number(document.getElementById("textbox").value);
        temp = toFahrenheit(temp);
         document.getElementById("tempLabel").innerHTML = "Fahrenheit: "+ temp +"°F"
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelcius(temp){
    return (temp - 32) * (5/9); 
}

function toFahrenheit(temp){
    retun (temp * 9 / 5 + 32);
}