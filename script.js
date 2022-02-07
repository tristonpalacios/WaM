const board = document.getElementsByClassName('board')
const moles = document.getElementsByClassName('mole')
const rstBtn = document.getElementById('restartButton')

console.log(rstBtn)
console.log(moles)

let arrayOfMoles = Array.from(moles)

console.log(arrayOfMoles)




// Hides moles on click (testing for what will become Whack!)
arrayOfMoles.forEach(function(elem) {
    elem.addEventListener("click", function() {
        //this function does stuff
   elem.classList.add(`hide`) });
});


//Reset button. Needs to start game over and store scores
let reset = function resetGame(){
    arrayOfMoles.forEach(function(ele){
        ele.classList.remove('hide');
        console.log(`hit`)
    })
}

console.log(arrayOfMoles)

rstBtn.addEventListener('click', reset)

//Function to create moles popping up at truly random intervals
function randomTime(min,max){
   return Math.floor(Math.random()*(max-min)+min);
    
     

}

//Trying to randomize what hole the moles pop through on the random intervoles
let lastHole = 12;
function randomHole(arrayOfMoles) {
  const hlnm = Math.floor(Math.random() * arrayOfMoles.length);
  console.log(`This hole number has been chosen ${hlnm}`);
// hole should refer to a random number set to the array. So if hlnm picks 4 it should pick the [4] on array of moles
  const hole = arrayOfMoles[hlnm];
  //if hole is the same hole as last time, run again.
  if (hole === lastHole) {
    console.log('duplicate hole');
    return randomHole(arrayOfMoles);
  }
  lastHole = hole;
  return hole;
}

//game funtction that ties it all together, random holes and random times.
function molePeep() {
    const time = randomTime(1100, 1500);
    const hole = randomHole(arrayOfMoles);
    hole.classList.remove('hide');
    setTimeout(() => {
      hole.classList.add('hide');
    }, time);
  }

console.log(randomTime(1100,1500))

molePeep()

let test = setInterval(molePeep,5000)
