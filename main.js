var minRangeInput = document.querySelector('.verify-input1')
var maxRangeInput = document.querySelector('.verify-input2')
var updateButton = document.querySelector('.guesser-range-form-button')
var curMinRange = document.querySelector('.guesser-guess-range-bold1')
var curMaxRange = document.querySelector('.guesser-guess-range-bold2')
var chal1GuessInput = document.querySelector('.verify-input3')
var chal2GuessInput = document.querySelector('.verify-input4')
var chal1NameInput = document.querySelector('.guesser-guess-form-nameInput1')
var chal2NameInput = document.querySelector('.guesser-guess-form-nameInput2')
var challengerName1 = document.querySelector('.guesser-score-header1')
var challengerName2 = document.querySelector('.guesser-score-header2')
var currentGuess1 = document.querySelector('.guesser-score-p2')
var currentGuess2 = document.querySelector('.guesser-score-p4')
var submitButton = document.querySelector('.guesser-guess-form-button1') 
var clearButton = document.querySelector('.guesser-guess-form-button3')
var resetButton = document.querySelector('.guesser-guess-form-button2')
var scoreCard1 = document.querySelector('.score-card')
var errorMessageNumber1 = document.querySelector('.guesser-number-error1')
var errorMessageNumber2 = document.querySelector('.guesser-number-error2')
var tooHigh = "That's Too High";
var tooLow = "That's Too Low";
var randomNum = 0;

document.addEventListener('DOMContentLoaded', getRandomNum);
console.log(randomNum);
clearButton.addEventListener('click', clearInput);
updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitGuess);
document.addEventListener('DOMContentLoaded', disableButton);
clearButton.addEventListener('click', disableButton);
// resetButton.addEventListener('click', disableButton);
minRangeInput.addEventListener('keyup', disableExponent);
maxRangeInput.addEventListener('keyup', disableExponent);
chal1GuessInput.addEventListener('keyup', disableExponent);
chal2GuessInput.addEventListener('keyup', disableExponent);
chal1NameInput.addEventListener('keydown', enableButton);
chal2NameInput.addEventListener('keydown', enableButton);
chal1GuessInput.addEventListener('keydown', enableButton);
chal2GuessInput.addEventListener('keydown', enableButton);
function disableExponent(e) {
  if(e.keyCode === 69) {
    minRangeInput.value = '';
    maxRangeInput.value = '';
    chal1GuessInput.value = '';
    chal2GuessInput.value = '';
  }
}

function updateRange(e) {
  e.preventDefault();
  curMinRange.innerHTML = minRangeInput.value;
  curMaxRange.innerHTML = maxRangeInput.value;
  getRandomNum(parseInt(minRangeInput.value), parseInt(maxRangeInput.value));
}

function getRandomNum(min, max) {
  randomNum = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min) || Math.floor(Math.random() * (parseInt(100) - parseInt(1) + 1)) + parseInt(1)
  return randomNum;
}

function submitGuess(e) {
  e.preventDefault();
  guessingMessage1();
  guessingMessage2();
  numericErrorMessage1();
  numericErrorMessage2();
  challengerName1.innerHTML = chal1NameInput.value;
  challengerName2.innerHTML = chal2NameInput.value;
  currentGuess1.innerHTML = chal1GuessInput.value;
  currentGuess2.innerHTML = chal2GuessInput.value;
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
  chal1NameInput.value = '';
  chal2NameInput.value = '';
  chal1GuessInput.value = '';
  chal2GuessInput.value = '';
}

function guessingMessage1() {
  if (chal1GuessInput.value > randomNum) {
    document.querySelector('.guesser-score-p3').innerHTML = tooHigh;
  } else if (chal1GuessInput.value < randomNum){
    document.querySelector('.guesser-score-p3').innerHTML = tooLow;
  } else {
    document.querySelector('.guesser-score-p3').innerHTML = 'Boom';
    scoreCard1.style.display = 'block'
  }
}

function guessingMessage2() {
  if (chal2GuessInput.value > randomNum) {
    document.querySelector('.guesser-score-p5').innerHTML = tooHigh;
  } else if (chal2GuessInput.value < randomNum){
    document.querySelector('.guesser-score-p5').innerHTML = tooLow;
  } else {
    document.querySelector('.guesser-score-p5').innerHTML = 'Boom';
    scoreCard1.style.display = 'block'
  }
}

function numericErrorMessage1() {
  if (chal1GuessInput.value > parseInt(curMaxRange.innerText) || chal1GuessInput.value < parseInt(curMinRange.innerText)) {
    errorMessageNumber1.style.display = 'block'
  }
}

function numericErrorMessage2() {
  if (chal2GuessInput.value > parseInt(curMaxRange.innerText) || chal2GuessInput.value < parseInt(curMinRange.innerText)) {
    errorMessageNumber2.style.display = 'block'
  }
}


// The Guess fields should only accept values that fall within the defined min and max range.
// The application should display an error message if the value entered in the Max Range input is less than the value in the Min Range input
// The application should display an error message if the value entered in the Min Range input is greater than the value in the Max Range input
// The application should display an error message if either guess is not a number (e.g. parseInt() returns NaN).
// The application should display an error if either guess is outside of the range of possible answers.
// The application should display an error if the Update or Submit Guess buttons are clicked when their associated input fields do not have a value entered

   //   function errorInform() {
   //    console.log(errorInform)
   //    if (chal1GuessInput.value > curMaxRange || chal1GuessInput.value < curMinRange){
   //      return = 'error message'
   // }