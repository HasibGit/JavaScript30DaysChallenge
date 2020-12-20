// jshint esversion : 6
let pressed = [];

let secret = 'hasib';

function check(e){
  pressed.push(e.key);
  pressed.splice(-secret.length-1,pressed.length - secret.length);
  if(pressed.join('').includes(secret)){
    cornify_add();
  }
}

window.addEventListener('keyup',check);
