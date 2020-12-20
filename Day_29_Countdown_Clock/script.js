
// jshint esversion : 6

let countDown;

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  // Close all ongoing function calls first.
  clearInterval(countDown);
  const now = Date.now();
  const then = now + seconds * 1000;
  endTimeDisplay(then);
  displayTime(seconds);
countDown = setInterval(()=>{
    let secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft === -0)
       secondsLeft = 0;
    if(secondsLeft < 0){
      clearInterval(countDown);
      return;
    }
    displayTime(secondsLeft);
  },1000);
}

function displayTime(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const timeLeft = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = timeLeft;
  timerDisplay.textContent = timeLeft;
}

function endTimeDisplay(timeStamp){
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => {
  button.addEventListener('click', startTimer);
});


document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset(); // clear out the value
});
