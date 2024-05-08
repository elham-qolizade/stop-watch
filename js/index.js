
const startbutton = document.querySelector("#start");
const stopbutton = document.querySelector("#stop");
const resetbutton = document.querySelector("#reset");
const second = document.querySelector("#second");
const minute = document.querySelector("#minute");
let Interval;
var seconds = 0;
var minutes = 0;

startbutton.onclick = function () {
    starttimer();
    Interval = setInterval(starttimer, 10);

}
stopbutton.onclick = function () {
    clearInterval(Interval);
}
resetbutton.onclick = function () {
    clearInterval(Interval);
    seconds = "00";
    minutes = "00";
    second.innerHTML = seconds;
    minute.innerHTML = minutes;
}
function starttimer() {
    seconds++;
    if (seconds <= 9) {
        second.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
        second.innerHTML = seconds;
    }
    if (seconds > 59) {
        console.log("minutes");
        minutes++;
        minute.innerHTML = "0" + minutes;
        seconds = 0;
        second.innerHTML = "00";
    }
    if (minutes > 9) {
        minute.innerHTML = minutes;
    }
};


