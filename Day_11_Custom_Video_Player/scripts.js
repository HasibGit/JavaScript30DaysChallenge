// jshint esversion : 6

// Get all the elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const player__controls = player.querySelector('.player__controls');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('.player__button');
const fullScreen = player.querySelector('.fullscreen');

function togglePlay(){
    if(video.paused){
      video.play();
    }else{
      video.pause();
    }
}

function updateButton(){
    let icon = video.paused ? '⏵︎' : '⏸︎';
    toggle.textContent = icon;
}

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}


function handleRangeUpdate(){
   video[this.name] = this.value;
}

function handleProgress(){
     let progress = (video.currentTime / video.duration) * 100;
     progressBar.style.flexBasis = `${progress}%`;
}

function scrub(e){
  let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function goFullScreen(){
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('click',updateButton);
toggle.addEventListener('click', updateButton);
video.addEventListener('timeupdate',handleProgress);
skipButtons.forEach(skipButton => {
  skipButton.addEventListener('click', skip);
});
ranges.forEach(range => {
  range.addEventListener('change', handleRangeUpdate);
  range.addEventListener('mousemove', handleRangeUpdate);
});

let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);
fullScreen.addEventListener('click', goFullScreen);
