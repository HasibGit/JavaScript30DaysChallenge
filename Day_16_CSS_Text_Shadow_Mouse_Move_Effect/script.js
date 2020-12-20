// jshint esversion : 6

// lets grab the div that contains the text h1

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;


function shadow(e){
  //console.log(e.target);
  // when mouse is outside h1, we are getting the whole div, when over text, we only get the text
  // lets check the offset values
  //console.log(e.offsetX, e.offsetY);
  // for nested div, child elements offset value gets cal. based on parent, here child is h1
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;  // width and height of div
  let x = e.offsetX;
  let y = e.offsetY;

  if(this !== e.target){
    // outside text this = e, but when we hover over text, e.target = h1, but this remains div
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = ((x/width) * walk) - (walk/2);
  const yWalk = ((y/height) * walk) - (walk/2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0,0,0,0.5)`;

  /*
      Basically offsetX and offsetY use kore mouse er pos determine kora jay.
      But nested elements thakle math use kora lagte pare.
      offsetX, clientX, pageX, screenX etc use kore click/move er exact pos determine kora jay
      offsetWidth/ offsetHeight use kore content er size determine kora jay.

  */

}


hero.addEventListener('mousemove', shadow);
