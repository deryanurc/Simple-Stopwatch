window.onload = function () {
  var seconds = document.getElementById("seconds");
  var tens = document.getElementById("tens");
  var buttonStart = document.getElementById("start-button");
  var buttonStop = document.getElementById("stop-button");
  var buttonReset = document.getElementById("reset-button");
  var sec = 0;
  var ten = 0;
  var Interval;

  buttonStart.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  buttonStop.onclick = () => {
    clearInterval(Interval);
  };
  buttonReset.onclick = () => {
    clearInterval(Interval);
    ten = "00";
    sec = "00";
    tens.innerHTML = ten;
    seconds.innerHTML = sec;
  };

  function startTimer() {
    ten++;

    if (ten <= 9) {
      tens.innerHTML = "0" + ten;
    }
    if (ten > 9) {
      tens.innerHTML = ten;
    }
    if (ten > 99) {
      console.log("seconds");
      sec++;
      seconds.innerHTML = "0" + sec;
      ten = 0;
      tens.innerHTML = "0" + 0;
    }
    if (sec > 9) {
      seconds.innerHTML = sec;
    }
  }
};
