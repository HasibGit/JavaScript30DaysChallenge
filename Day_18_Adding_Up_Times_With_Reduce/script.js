// jshint esversion : 6
const nodes = [...document.querySelectorAll('[data-time]')];

const seconds = nodes
                   .map(n => n.dataset.time)
                   .map(timeCode => {
                     const [mins, secs] = timeCode.split(':').map(parseFloat);
                     return mins*60 + secs;
                   })
                   .reduce((total, curr) => {
                     return total+curr;
                   },0);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours + " " + mins + " " + secondsLeft);
