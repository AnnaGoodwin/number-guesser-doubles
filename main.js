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
var randomNum = 0;

document.addEventListener("DOMContentLoaded", getRandomNum);
console.log(randomNum);
document.addEventListener("DOMContentLoaded", disableButton);
clearButton.addEventListener('click', clearInput);
updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitGuess);
numberInput1.addEventListener('keyup', disableExponent);
numberInput2.addEventListener('keyup', disableExponent);
numberInput3.addEventListener('keyup', disableExponent);
numberInput4.addEventListener('keyup', disableExponent);
numberInput3.addEventListener('keyup', enableButton);
numberInput4.addEventListener('keyup', enableButton);
challenger1.addEventListener('keyup', enableButton);
challenger2.addEventListener('keyup', enableButton);

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
  challengerName1.innerHTML = challenger1.value;
  challengerName2.innerHTML = challenger2.value;
  currentGuess1.innerHTML = numberInput3.value;
  currentGuess2.innerHTML = numberInput4.value;
}

function disableButton(e) {
  e.preventDefault();
  if (challenger1.value === '' || challenger2.value === '' || numberInput3.value === '' || numberInput4.value === '') {
    resetButton.disabled = true;
    clearButton.disabled = true
  }
}

function enableButton(e) {
  e.preventDefault();
  if (challenger1.value !== '' || challenger2.value !== '' || numberInput3.value !== '' || numberInput4.value !== '') {
    resetButton.disabled = false;
    clearButton.disabled = false;
  }
}

function clearInput(e) {
  e.preventDefault();
  challenger1.value = '';
  challenger2.value = '';
  numberInput3.value = '';
  numberInput4.value = '';
}
