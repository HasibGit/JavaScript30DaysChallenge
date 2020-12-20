// jshint esversion : 6

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // webkit one for crome

  const recognition = new SpeechRecognition();
  recognition.interimResults = true; // so that words appear as we speak rather than when we stop and then the full sent.. appear
  recognition.lang = 'en-US'; // setting up language

  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)  // log e to see how the data looks like
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      p.textContent = transcript;

      if (e.results[0].isFinal) {  //  if paragraph is done, create a new p and append to div.
        p = document.createElement('p');
        words.appendChild(p);
      }
  });

  recognition.addEventListener('end', recognition.start); // if we are done talking, start up recognition again

  recognition.start();
