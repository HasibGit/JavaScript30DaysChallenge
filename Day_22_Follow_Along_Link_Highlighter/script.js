// jshint esversion : 6
const links = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');

document.body.append(highlight);

function highlightLink(){
  const linkCords = this.getBoundingClientRect();
  const Cords = {
    width : linkCords.width,
    height : linkCords.height,
    left : linkCords.left + window.scrollX,
    top : linkCords.top + window.scrollY
  };


  //console.log(linkCords);
  highlight.style.width = `${Cords.width}px`;
  highlight.style.height = `${Cords.height}px`;
  highlight.style.transform = `translate(${Cords.left}px,${Cords.top}px)`;
}

links.forEach((a) => {
  a.addEventListener('mouseenter', highlightLink);
});
