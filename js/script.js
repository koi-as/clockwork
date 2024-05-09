console.log('hi');

// clock functions
function clockExecution() {
  const d = new Date();
  document.getElementById('clockDisplay').innerHTML = d.toLocaleTimeString();
}

setInterval(clockExecution, 1000);

// timer functions
let s = document.getElementById('secondsInput');
let m = document.getElementById('minutesInput');
let h = document.getElementById('hoursInput');

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
    endtimer();
  }
}

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
