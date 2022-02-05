const board = document.getElementsByClassName('board')
const moles = document.getElementsByClassName('mole')
const rstBtn = document.getElementById('restartButton')

console.log(rstBtn)
console.log(moles)

let arrayOfMoles = Array.from(moles)

console.log(arrayOfMoles)





arrayOfMoles.forEach(function(elem) {
    elem.addEventListener("click", function() {
        //this function does stuff
   elem.classList.add(`hide`) });
});

let reset = function resetGame(){
    arrayOfMoles.forEach(function(ele){
        ele.classList.remove('hide');
        console.log(`hit`)
    })
}

console.log(arrayOfMoles)

rstBtn.addEventListener('click', reset)

