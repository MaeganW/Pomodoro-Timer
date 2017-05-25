var breakCount = 6;
var sessionCount = 26;

var sessionCountStart = sessionCount;
var breakCountStart = breakCount;

var breakTime = document.getElementById("breakTime");
var sessionTime = document.getElementById("sessionTime");

var breakDecrement = document.getElementById("breakDecrement");
var sessionDecrement = document.getElementById("sessionDecrement");

var breakIncrement = document.getElementById("breakIncrement");
var sessionIncrement = document.getElementById("sessionIncrement");

var displayh2 = document.querySelector("h2");
var display = document.querySelector("section>p");

var pomodoros = document.querySelector("#pomodoros span");
var pomodorosCount = 0;


//increment and decrement event listeners
sessionDecrement.addEventListener("click", function () {
    if (sessionCount > 0) {
        sessionCount--;
        sessionCountStart--;
        sessionTime.textContent = sessionCount;
        display.textContent = sessionCount;
    } else return false;
});

breakDecrement.addEventListener("click", function () {
    if (breakCount > 0) {
        breakCount--;
        breakCountStart--;
        breakTime.textContent = breakCount;
    } else return false;
});

sessionIncrement.addEventListener("click", function () {
    if (sessionCount < 60) {
        sessionCount++;
        sessionCountStart++;
        sessionTime.textContent = sessionCount;
        display.textContent = sessionCount;
    } else return false;
});

breakIncrement.addEventListener("click", function () {
    if (breakCount < 30) {
        breakCount++;
        breakCountStart++;
        breakTime.textContent = breakCount;
    } else return false;
});

//add timer event listener
display.addEventListener("click", startTimer);

//session timer function
function startTimer() {
    setInterval(function () {
        startSessionTimer();
    }, 1000);
}

//session timer function
function startSessionTimer() {
    var end = 0;
    sessionDisplayUpdate();
    if (sessionCount == end) {
        startBreakTimer();
    }
}

//break timer function
function startBreakTimer() {
    var end = 1;
    breakDisplayUpdate();
    if (breakCount == end) {
        sessionCount = sessionCountStart + 1;
        breakCount = breakCountStart;
//        clearInterval();
        pomodorosDisplayUpdate();
    }
}

//update session timer display function
function sessionDisplayUpdate() {
    displayh2.textContent = "Session";
    if (sessionCount > 0) {
        sessionCount -= 1;
        display.textContent = sessionCount;
    }
}

//update break timer display function
function breakDisplayUpdate() {
    displayh2.textContent = "BREAK!";
    if (breakCount > 1) {
        breakCount -= 1;
        display.textContent = breakCount;
    }
}

//update pomodoros count
function pomodorosDisplayUpdate () {
    pomodorosCount += 1;
    pomodoros.textContent = pomodorosCount;
}
