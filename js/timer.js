// timer functions

// vars that take info input by user to create timer
let s = /*document.getElementById('secondsInput').value; */ 59; // using test numbers
let m = /*document.getElementById('minutesInput').value;*/5;
let h = /*document.getElementById('hoursInput').value;*/0;

setInterval(timerExecution, 1000)

// using setInterval(), this counts down the timer
function timerExecution() {
  if (s > 0) {
    s--;
    format();
  } else if (s == 0 && m > 0) {
    s = 59;
    m--;
    format();
  } else if (s == 0 && m == 0 && h > 0) {
    s = 59;
    m = 59;
    h--;
    format();
  } else if (s == 0 && m == 0 && h == 0) {
    endTimer();
  }
}

// formats timer to show a "0" when number displayed is in 1s digit
function format() {
  if (s < 10 && m < 10 && h < 10) {
    document.getElementById('timerDisplay').innerHTML = '0' + h + ":" + '0' + m + ":" + '0' + s
  } else if (m < 10 && h < 10) {
    document.getElementById('timerDisplay').innerHTML = '0' + h + ":" + '0' + m + ":" + s
  } else if (s < 10 && h < 10) {
    document.getElementById('timerDisplay').innerHTML = '0' + h + ":" + m + ":" + '0' + s
  } else if (s < 10 && m < 10) {
    document.getElementById('timerDisplay').innerHTML = h + ":" + '0' + m + ":" + '0' + s
  } else if (h < 10) {
    document.getElementById('timerDisplay').innerHTML = '0' + h + ":" + m + ":" + s
  } else if (m < 10) {
    document.getElementById('timerDisplay').innerHTML = h + ":" + '0' + m + ":" + s
  } else if (s < 10) {
    document.getElementById('timerDisplay').innerHTML = h + ":" + m + ":" + '0' + s
  } else {
    document.getElementById('timerDisplay').innerHTML = h + ":" + m + ":" + s
  }
}

// notifies user the timer has finished
function endTimer() {
  // sound effect
  // visual effect
  // notification
}
