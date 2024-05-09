console.log('hi');

// clock functions
function clockExecution() {
  const d = new Date();
  document.getElementById('clockDisplay').innerHTML = d.toLocaleTimeString();
}

setInterval(clockExecution, 1000);

// timer functions
