const myButton = document.querySelector("#mybtn");
const myImg = document.querySelector("#myimg");

myButton.addEventListener("click", () => {
    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
    }
    else{
        myImg.style.visibility = "hidden"; 
    }
})