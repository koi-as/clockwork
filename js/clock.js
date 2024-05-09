// clock functions

// creates new time function
// for future development: create time and set to vars so user can change display as they like
function clockExecution() {
  const d = new Date();
  document.getElementById('clockDisplay').innerHTML = d.toLocaleTimeString();
}

// setInterval automatically update clock
setInterval(clockExecution, 1000);
