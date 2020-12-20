// jshint esversion : 6
let checkBoxes = document.querySelectorAll('.inbox input');
//console.log(checkBoxes);

let lastChecked;

function handleClick(e){
  //console.log(e);
  if(e.shiftKey && this.checked){
    let inBetween = false;
    checkBoxes.forEach(checkBox => {
      if(checkBox === this || checkBox === lastChecked){
        inBetween = !inBetween;
      }
      if(inBetween){
        checkBox.checked = true;
      }
    });
  }

  lastChecked = this;
}


checkBoxes.forEach(checkBox => {
      checkBox.addEventListener('click', handleClick);
});
