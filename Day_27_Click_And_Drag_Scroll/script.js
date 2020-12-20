// jshint esversion : 6


const area =  document.querySelector('.items');

let mouseDown = false;

let startX;
let scrollLeft;

area.addEventListener('mousedown', (e) => {
  mouseDown = true;
  area.classList.add('active');
  startX = e.pageX - area.offsetLeft; // offset for removing margin outside div from cal.
  scrollLeft = area.scrollLeft;
});

area.addEventListener('mouseup', () => {
  mouseDown = false;
  area.classList.remove('active');
});

area.addEventListener('mouseleave', () => {
  mouseDown = false;
  area.classList.remove('active');
});

area.addEventListener('mousemove', (e) => {
  if(!mouseDown) return;
  area.classList.add('active');
  let x = (e.pageX - area.offsetLeft);
  let walk = (x - startX)  * 3;  // *3 for making it move fast
  area.scrollLeft = scrollLeft - walk;
});
