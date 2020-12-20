// jshint esversion : 6

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


function handleEnter(){
  this.classList.add('trigger-enter');
  setTimeout(() => {
    if(this.classList.contains('trigger-enter')){  // if we move real quick, this issue solves the problem
      this.classList.add('trigger-enter-active'); // if we didn't use arrow function here, we would get a window event, so
                                                  // can't use classList
    }
  }, 150);
  background.classList.add('open');
  const dropdown = this.querySelector('.dropdown');
  const dropdownCords = dropdown.getBoundingClientRect();
  const navCords = nav.getBoundingClientRect();

  const cords = {
    width : dropdownCords.width,
    height : dropdownCords.height,
    left : dropdownCords.left - navCords.left,
    top : dropdownCords.top - navCords.top
  };
  background.style.setProperty('width', `${cords.width}px`);
  background.style.setProperty('height', `${cords.height}px`);
  background.style.setProperty('transform', `translate(${cords.left}px,${cords.top}px)`);
}

function handleLeave(){
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}


triggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', handleEnter);
      trigger.addEventListener('mouseleave', handleLeave);
});
