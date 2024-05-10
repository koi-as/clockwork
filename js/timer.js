// timer functions

// vars that take info input by user to create timer
let s = /*document.getElementById('secondsInput').value;*/ 9; // using test numbers
let m = /*document.getElementById('minutesInput').value;*/9;
let h = /*document.getElementById('hoursInput').value;*/0;

function startTimer() {
  let interval = setInterval(timerExecution, 1000);
  timerExecution(interval);
}

// using setInterval(), this counts down the timer
function timerExecution(i) {
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
    endTimer(i);
  }
}

// formats timer to show a "0" when number displayed is in 1s digit
function format() {
  var newS = (s < 10) ? '0' + s : s;
  var newM = (m < 10) ? '0' + m : m;
  var newH = (h < 10) ? '0' + h : h;
  document.getElementById('timerDisplay').innerHTML = newH + ":" + newM + ":" + newS;
}

// notifies user the timer has finished
function endTimer(i) {
  alert('Timer has ended');
  // add some kind of noise or notification or effect to better signal the end of the timer
  clearInterval(i);
}

window.onload = function masterFunction() { 
  document.getElementById('timerDisplay').innerHTML = '00' + ":" + '00' + ":" + '00';
}
