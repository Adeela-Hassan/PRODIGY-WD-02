let timer; // Timer variable
let isRunning = false; // Flag to track if the stopwatch is running
let startTime; // Variable to store start time
let lapCounter = 1; // Lap counter

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;
  } else {
    startTime = new Date().getTime();
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').textContent = 'Stop';
    isRunning = true;
  }
}

function updateDisplay() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  
  const milliseconds = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2, '0');
  const seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60).toString().padStart(2, '0');
  
  document.getElementById('milliseconds').textContent = milliseconds;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('minutes').textContent = minutes;
}

function lapReset() {
  if (isRunning) {
    const lapTime = document.createElement('li');
    lapTime.textContent = `Lap ${lapCounter}: ${document.getElementById('minutes').textContent}:${document.getElementById('seconds').textContent}:${document.getElementById('milliseconds').textContent}`;
    document.getElementById('laps').appendChild(lapTime);
    lapCounter++;
  } else {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '000';
    lapCounter = 1;
    document.getElementById('laps').innerHTML = '';
  }
}
