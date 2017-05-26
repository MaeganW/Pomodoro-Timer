var breakCount = 5;
var sessionCount = 25;

var timeInterval = 1000;
var pomodorosCount = 0;

var isPaused = true;

var sessionCountRepeat = sessionCount;
var breakCountRepeat = breakCount;

var breakTime = document.getElementById("breakTime");
var sessionTime = document.getElementById("sessionTime");

var breakDecBtn = document.getElementById("breakDecrement");
var sessionDecBtn = document.getElementById("sessionDecrement");

var breakIncBtn = document.getElementById("breakIncrement");
var sessionIncBtn = document.getElementById("sessionIncrement");

var displayh2 = document.querySelector("h2");
var display = document.querySelector("section>p");

var pomodoros = document.querySelector("#pomodoros span");


//increment and decrement event listeners
sessionDecBtn.addEventListener("click", function () {
    if (sessionCount > 1) {
        if (isPaused) {
            sessionCount--;
            sessionCountRepeat--;
            sessionTime.textContent = sessionCount;
            display.textContent = sessionCount;
        }
    } else if (sessionCount <= 1) {
        alert("Session length cannot be zero.");
    }
});

breakDecBtn.addEventListener("click", function () {
    if (breakCount > 1) {
        if (isPaused) {
            breakCount--;
            breakCountRepeat--;
            breakTime.textContent = breakCount;
        }
    } else if (breakCount <= 1) {
        alert("Break length cannot be zero.");
    }
});

sessionIncBtn.addEventListener("click", function () {
    if (sessionCount <= 60) {
        if (isPaused) {
            sessionCount++;
            sessionCountRepeat++;
            sessionTime.textContent = sessionCount;
            display.textContent = sessionCount;
        }
    } else {
        alert("Session length cannot exceed 60 minutes.");
    }
});

breakIncBtn.addEventListener("click", function () {
    if (breakCount <= 30) {
        if (isPaused) {
            breakCount++;
            breakCountRepeat++;
            breakTime.textContent = breakCount;
        }
    } else {
        alert("Break length cannot exceed 30 minutes.");
    }
});

//add timer event listener
display.addEventListener("click", startTimer);

//session timer function
function startTimer(event) {

    var clickCount = event.currentTarget;
    clickCount.clicks = (clickCount.clicks || 0) + 1;
    console.log(clickCount.clicks);


    if (clickCount.clicks % 2 === 0) {
        isPaused = true;
        stopInterval();
    } else {
        isPaused = false;
        startInterval(timeInterval);
    }

}

var interval = null;

function startInterval(timeInterval) {
    interval = setInterval(function () {
        startSessionTimer();
    }, timeInterval);
}

function stopInterval() {
    clearInterval(interval);
    interval = null;
}


//session timer function
function startSessionTimer() {
    sessionDisplayUpdate();
    if (sessionCount === 0) {
        startBreakTimer();
    }
}

//break timer function
function startBreakTimer() {
    breakDisplayUpdate();
    console.log(breakCount);
    if (breakCount === 1) {
        sessionCount = sessionCountRepeat + 1;
        breakCount = breakCountRepeat + 1;
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
    if (breakCount > 0) {
        breakCount -= 1;
        display.textContent = breakCount;
    }
}

//update pomodoros count
function pomodorosDisplayUpdate() {
    if (sessionCount === 0) {
        pomodorosCount += 1;
        pomodoros.textContent = pomodorosCount;
    }

}
