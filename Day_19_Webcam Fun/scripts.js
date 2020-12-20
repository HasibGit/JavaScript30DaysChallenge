// jshint esversion : 6
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false }) // getting my video from webcam
    .then(localMediaStream => {   // the obj is localMediaStream
      console.log(localMediaStream);

//  DEPRECIATION :
//       The following has been depreceated by major browsers as of Chrome and Firefox.
//       video.src = window.URL.createObjectURL(localMediaStream);
//       Please refer to these:
//       Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
//       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

      video.srcObject = localMediaStream;  // making video src obj to the localMediaStream
      video.play(); // playing the video
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas(){   // show the video in canvas
      const width = video.videoWidth;
      const height = video.videoHeight;
      //console.log(width + " " + height);
      canvas.width = width;
      canvas.height = height;


      return setInterval(() => {  // every 60 mil sec, draw the video image in canvas
        ctx.drawImage(video,0 , 0, width, height);
        // take the pixels out
        let pixels = ctx.getImageData(0,0,width,height);

        // mess with them
          pixels = redEffect(pixels);
          //pixels = rgbSplit(pixels);
          ctx.globalAlpha = 0.8;
        // put them back
        ctx.putImageData(pixels,0,0);
      },60);
}


function redEffect(pixels){
  for(let i = 0;i < pixels.data.length;i += 4){
    pixels.data[i+0] = pixels.data[i+0] + 100;  // Red
    pixels.data[i+1] = pixels.data[i+1] - 50; // Green
    pixels.data[i+2] = pixels.data[i+2] * 0.5; // blue
  }
  return pixels;
}

function rgbSplit(pixels){
  for(let i = 0;i < pixels.data.length;i += 4){
    pixels.data[i-150] = pixels.data[i+0]; //R
    pixels.data[i+500] = pixels.data[i+1]; //G
    pixels.data[i-550] = pixels.data[i+2]; //B
  }
  return pixels;
}



function takePhoto(){
  // play snap sound
  snap.currentTime = 0;
  snap.play();

  // take data out of the canvas
  const data = canvas.toDataURL('/images/jpeg');  // converting canvas data to file
  const link =  document.createElement('a'); // linking that file
  link.href = data;
  link.setAttribute('download', 'hasib'); // setting file name
  link.innerHTML = `<img src= "${data}" alt="Hasib"/>`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
