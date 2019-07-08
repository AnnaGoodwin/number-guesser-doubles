

// Query Selectors

var numberInput1 = document.querySelector('.verify-input1')
var numberInput2 = document.querySelector('.verify-input2')
var updateButton = document.querySelector('.guesser-range-form-button')
var curRange1 = document.querySelector('.guesser-guess-range-bold1')
var curRange2 = document.querySelector('.guesser-guess-range-bold2')
var numberInput3 = document.querySelector('.verify-input3')
var numberInput4 = document.querySelector('.verify-input4')
var challenger1 = document.querySelector('.guesser-guess-form-nameInput1')
var challenger2 = document.querySelector('.guesser-guess-form-nameInput2')
var challengerName1 = document.querySelector('.guesser-score-header1')
var challengerName2 = document.querySelector('.guesser-score-header2')
var currentGuess1 = document.querySelector('.guesser-score-p2')
var currentGuess2 = document.querySelector('.guesser-score-p5')
var submitButton = document.querySelector('.guesser-guess-form-button1') 
var clearButton = document.querySelector('.guesser-guess-form-button3')
var resetButton = document.querySelector('.guesser-guess-form-button2')
var scoreCard1 = document.querySelector('.score-card')

// Global Variable
var tooHigh = "That's Too High";
var tooLow = "That's Too Low";
var randomNum = 0;


// Event Listeners
document.addEventListener('DOMContentLoaded', getRandomNum);
console.log(randomNum);
clearButton.addEventListener('click', clearInput);
updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitGuess);
document.addEventListener('DOMContentLoaded', disableButton);
clearButton.addEventListener('click', disableButton);
// resetButton.addEventListener('click', disableButton);
numberInput1.addEventListener('keyup', disableExponent);
numberInput2.addEventListener('keyup', disableExponent);
numberInput3.addEventListener('keyup', disableExponent);
numberInput4.addEventListener('keyup', disableExponent);
challenger1.addEventListener('keydown', enableButton);
challenger2.addEventListener('keydown', enableButton);
numberInput3.addEventListener('keydown', enableButton);
numberInput4.addEventListener('keydown', enableButton);


// Functions
function disableExponent(e) {
  if(e.keyCode === 69) {
    numberInput1.value = '';
    numberInput2.value = '';
    numberInput3.value = '';
    numberInput4.value = '';
  }
}

function updateRange(e) {
  e.preventDefault();
  curRange1.innerHTML = numberInput1.value;
  curRange2.innerHTML = numberInput2.value;
  getRandomNum(parseInt(numberInput1.value), parseInt(numberInput2.value));
}

function getRandomNum(min, max) {
  randomNum = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min) || Math.floor(Math.random() * (parseInt(100) - parseInt(1) + 1)) + parseInt(1)
  return randomNum;
}

function submitGuess(e) {
  e.preventDefault();
  guessingMessage1();
  guessingMessage2();
  challengerName1.innerHTML = challenger1.value;
  challengerName2.innerHTML = challenger2.value;
  currentGuess1.innerHTML = numberInput3.value;
  currentGuess2.innerHTML = numberInput4.value;
}

function disableButton() {
    resetButton.disabled = true;
    clearButton.disabled = true;
}

function enableButton() {
    resetButton.disabled = false;
    clearButton.disabled = false;
}

function clearInput(e) {
  e.preventDefault();
  challenger1.value = '';
  challenger2.value = '';
  numberInput3.value = '';
  numberInput4.value = '';
}

function guessingMessage1() {
  if (numberInput3.value > randomNum) {
    document.querySelector('.guesser-score-p3').innerHTML = tooHigh;
  } else if (numberInput3.value < randomNum){
    document.querySelector('.guesser-score-p3').innerHTML = tooLow;
  } else {
    document.querySelector('.guesser-score-p3').innerHTML = 'Boom';
    scoreCard1.style.display = 'block'
  }
}

function guessingMessage2() {
  if (numberInput4.value > randomNum) {
    document.querySelector('.guesser-score-p6').innerHTML = tooHigh;
  } else if (numberInput4.value < randomNum){
    document.querySelector('.guesser-score-p6').innerHTML = tooLow;
  } else {
    document.querySelector('.guesser-score-p6').innerHTML = 'Boom';
    scoreCard1.style.display = 'block'
  }
}

