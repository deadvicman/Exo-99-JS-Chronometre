// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let stopButton = document.getElementById("stop-button");


let maDate = new Date()
maDate.getSeconds()
seconds.innerHTML = maDate.getSeconds()

let counter = 0

let countUp = function() {
    counter+=1;
    seconds.innerHTML = counter;

};

setTimeout(countUp,1000);

let stopCountUp = function() {
    clearInterval(countUp)
};

stopButton.addEventListener("click", stopCountUp);
