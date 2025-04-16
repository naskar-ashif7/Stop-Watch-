let [minutes,seconds,hours] = [0,0,0];

const displayTimer = document.querySelector("#display");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let timer = null;


const runWatch = () =>{
seconds++;
if(seconds === 60){
    seconds = 0;
    minutes++;
    if(minutes === 60){
        minutes = 0;
        hours++;
    }
}

let h = hours <10 ? "0" + hours : hours;
let m = minutes <10 ? "0" + minutes : minutes;
let s = seconds <10 ? "0" + seconds : seconds;

displayTimer.innerHTML = h +" : " + m + " : " + s;

};

const startWatch = () =>{
    if(timer!==null){
        clearInterval(timer);
    }
   timer = setInterval(runWatch,1000);

}

const stopWatch = () =>{
    clearInterval(timer);
}

const resetWatch = () =>{
    clearInterval(timer);
    [minutes,seconds,hours] = [0,0,0];
    displayTimer.innerHTML = "00 : 00 : 00";
}

playBtn.addEventListener("click",startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);
