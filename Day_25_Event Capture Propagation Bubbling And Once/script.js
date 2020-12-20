// jshint esversion : 6

const divs = document.querySelectorAll('div');

function check(e){
  console.log(this.classList.value);
  // clicking on a nested div triggers every div that is nested within on that click.
  // if we click on three(inner most), both one and two also gets triggered. This is known as bubbling.
  // we can also stop this propagetion.
  //e.stopPropagation();

}


divs.forEach(div => {
  // by setting capture : true in options, rather that bubble up, it will do capture down one-two-three
  // Also another option is once, making it true means we can only trigger it once, after that it wont work anymore.
  div.addEventListener('click', check, {capture : true, once : true});
});
