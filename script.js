const board = document.getElementsByClassName("board");
const moles = document.getElementsByClassName("mole");
const rstBtn = document.getElementById("restartButton");
scoreOrigin = document.getElementById("score").innerText;
livesOrgin = document.getElementById("lives").innerText;
const strBtn = document.getElementById(`startbtn`);
// const score = scoreOrigin.innerText

// Hide start button on click
// create art assets for

scoreOrigin = `22`;

lives = 3;

clickedMoles = 0;

console.log(rstBtn);
console.log(moles);

let arrayOfMoles = Array.from(moles);

console.log(arrayOfMoles);

score = 0;
moleCounter = 0;

// Hides moles on click (testing for what will become Whack!)
arrayOfMoles.forEach(function (elem) {
  elem.addEventListener("mousedown", function () {
    //this function does stuff when you click
    elem.classList.add(`hide`);
    console.log(`YOU HIT DA MOLE`);
    score++;
    console.log(`The score is ${score}`);
    document.getElementById("score").innerText = `The score is ${score}`;
    clickedMoles = clickedMoles + 1;
  });
});

console.log(arrayOfMoles);

//Function to create moles popping up at truly random intervals
function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Trying to randomize what hole the moles pop through on the random intervoles
let lastHole = 12;
function randomHole(arrayOfMoles) {
  const hlnm = Math.floor(Math.random() * arrayOfMoles.length);
  // console.log(`This hole number has been chosen ${hlnm}`);
  // hole should refer to a random number set to the array. So if hlnm picks 4 it should pick the [4] on array of moles
  const hole = arrayOfMoles[hlnm];
  //if hole is the same hole as last time, run again.
  if (hole === lastHole) {
    console.log("duplicate hole");
    return randomHole(arrayOfMoles);
  }
  lastHole = hole;
  return hole;
}

// function lifeCounter(){
//   if(clickedMoles >= moleCounter -1  ){
//     console.log(`${score} <-clickedMoles lives-> ${lives} ->${moleCounter}` );
//     lives = lives;
//     document.getElementById('lives').innerText = lives;
//     moleCounter-1
//   } else if (clickedMoles < moleCounter -2 ){
//     console.log(`${clickedMoles} <-ClickedMoles lives-> ${lives} ->${moleCounter}` );
//     lives = lives-1;
//     moleCounter = moleCounter-1;
//     document.getElementById('lives').innerText = lives;

//   }
// }

//game funtction that ties it all together, random holes and random times.

// console.log(randomTime(1100,1500))

let game = function RunGame() {
  let int = setInterval(molePeep, 3000);

  function molePeep() {
    const time = randomTime(400, 1500);
    const hole = randomHole(arrayOfMoles);
    hole.classList.remove("hide");
    setTimeout(() => {
      hole.classList.add("hide");
    }, time);
    moleCounter++;
    console.log(`${moleCounter} moles have appeared`);
    // lifeCounter()
    setTimeout(() => {
      liveChecking();
    }, time);
    if (lives < 1) {
      endgame();
    }
  }
  if (lives < 1) {
    endgame();
  }
  function endgame() {
    clearInterval(int);
    console.log(`End of Game`);
    document.getElementById(
      "lives"
    ).innerText = `The moles have overtaken the farm!`;

    // document.getElementsByClassName(`button`).classList.remove(`hide`);
  }

  function liveChecking() {
    if (clickedMoles < moleCounter) {
      moleCounter = moleCounter - 1;
      lives = lives - 1;
      document.getElementById("lives").innerText = lives;
      if (lives < 1) {
        endgame();
      }
    }
  }
  strBtn.classList.add(`hide`);
  
};

//Reset button. Needs to start game over and store scores
let reset = function resetGame() {
  score = 0;
  document.getElementById("score").innerText = score;
  game;
  lives = 3;
  moleCounter = 0;
  game();
  document.getElementById("lives").innerText = lives;
};
rstBtn.addEventListener("click", reset);

strBtn.addEventListener("click", game);
