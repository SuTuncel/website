
const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        //let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "pm" : "am"; 

        hours= formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds == formatZeros(seconds);
        return `${hours}.${minutes}.${seconds} ${amOrpm}`;
    }

    function formatZeros(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time; 
    }
}