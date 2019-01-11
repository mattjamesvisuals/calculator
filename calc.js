//calc.js
//diplay stuff
const display = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.button');
 numberBtns.forEach( element => {
   element.addEventListener('click', numFunction);
 })

 //number buttons
document.addEventListener('keydown', captureKey);
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['=', '+', '-', '*', '/', 'esc'];
let deadKeyStor = [];
const finalCalc = [];
function numFunction(e) {
   const value = e.target.value;
   deadKeyStor.push(value);
   updateDisplay();
 }

function captureKey(e) {
  const pressedKey = e.key
  if (numbers.includes(pressedKey) || operators.includes(pressedKey)) {
    deadKeyStor.push(pressedKey);
    updateDisplay();
  }
}

function updateDisplay(){
  const lastKey = deadKeyStor[deadKeyStor.length - 1];
  if (operators.includes(lastKey)) {
      const myNum = deadKeyStor.slice(0, deadKeyStor.length - 1);
    finalCalc.push(myNum.join(""));
    deadKeyStor = [lastKey];
  }

  display.innerHTML = deadKeyStor.join("");

//if an operator is pressed join numbers and store them as one unit

}






//operator buttons
