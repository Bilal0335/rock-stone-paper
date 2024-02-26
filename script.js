let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll ('.choice');
const msg = document.querySelector ('#msg');

const genCompChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor (Math.random () * 3);
  return options[randomNum];
};

const drwGame = () => {
  console.log ("It's a draw!");
  msg.innerText = 'Game was Draw. Play again.';
  msg.style.backgroundColor = '#081b31';
};

const showWInner = userWin => {
  if (userWin) {
    console.log ('You are Winner!');
    msg.innerText = 'You are Win!';
    msg.style.backgroundColor = 'green';
  } else {
    console.log ('You are Lose!');
    msg.innerText = 'You are Lose!';
    msg.style.backgroundColor = 'red';
  }
};
const playGame = userChoice => {
  console.log ('User choice = ', userChoice);
  //generate computer choice
  const comChoice = genCompChoice ();
  console.log ('Computer choice=', comChoice);
  if (userChoice === comChoice) {
    drwGame ();
  } else {
    let userWin = true;
    if (userChoice === 'rock') {
      //scissor,paper
      userWin = genCompChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      //scissor,rock
      userWin = genCompChoice === 'scissors' ? false : true;
    } else if (userChoice === 'scissors') {
      //rock,paper
      userWin = genCompChoice === 'rock' ? false : true;
    }
    showWInner (userWin);
  }
};

choices.forEach (choice => {
  choice.addEventListener ('click', () => {
    const userChoice = choice.getAttribute ('id');
    // console.log ('choice was clicked', userChoice);
    playGame (userChoice);
  });
});
