// jshint esversion : 6

  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;


  function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if(hole === lastHole){
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep(){
    const hole = randomHole(holes);
    const time = randomTime(200,1000);
    hole.classList.add('up');

    setTimeout(()=>{
      hole.classList.remove('up');
      if(!timeUp) peep();
    },time);
  }

  function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    peep();
    setTimeout(() => {
      timeUp = true;
    },20000);
  }

  function bonk(e){
    if(!e.isTrusted) return; // check if actually got clicked by user or faking it with js
    score++;
    scoreBoard.textContent = score;
    this.classList.remove('up');
  }


  moles.forEach(mole => mole.addEventListener('click', bonk));