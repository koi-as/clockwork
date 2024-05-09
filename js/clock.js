console.log('hello')

// clock functions
function clockExecution() {
  const d = new Date();
  document.getElementById('clockDisplay').innerHTML = d.toLocaleTimeString();
}

setInterval(clockExecution, 1000);
