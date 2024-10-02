var isStop = true;
var s = 0;
var min = 0;
var hour = 0;
var lapCount = 0;

function start() {
  if (isStop == true) {
    isStop = false;
    timer();
  }
}

function timer() {
  if (isStop == false) {
    s = parseInt(s);
    min = parseInt(min);
    hour = parseInt(hour);

    s++;
    if (s == 60) {
      s = 0;
      min++;
    }

    if (min == 60) {
      min = 0;
      hour++;
    }

    if (s < 10) {
      s = "0" + s;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if (hour < 10) {
      hour = "0" + hour;
    }
    stopwatch.innerHTML = hour + " : " + min + " : " + s;
    setTimeout("timer()", 1000);
  }
}

function stop() {
  isStop = true;
}

function reset() {
  isStop = true;
  s = 0;
  min = 0;
  hour = 0;
  lapCount = 0; 
  document.getElementById("stopwatch").innerHTML = "00 : 00 : 00";
  document.getElementById("laps").innerHTML = "";
  stopwatch.innerHTML = "00 : 00 : 00";
}

function lap() {
  if (!isStop) {
    lapCount++;
    const lapTime = document.getElementById("stopwatch").innerHTML;
    const lapDisplay = document.getElementById("laps");
    const newLap = document.createElement("h2");
    newLap.innerHTML = `Lap ${lapCount}: ${lapTime}`;
    newLap.style.border = "2px solid white";
    lapDisplay.appendChild(newLap);
  }
}
