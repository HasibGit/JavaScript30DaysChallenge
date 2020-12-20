// jshint esversion : 6
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  const suffix = this.dataset.sizing || ''; // data- related joto attribute ase, dataset dye sob data value collect kora jay.
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
