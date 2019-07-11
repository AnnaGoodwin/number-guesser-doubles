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
var errorMessageName1 = document.querySelector ('.guesser-name-error1')
var errorMessageName2 = document.querySelector ('.guesser-name-error2')
var rangeErrorMessage1 = document.querySelector ('.range-number-error')
var rangeErrorMessage2 = document.querySelector ('.range-number-error2')
var scoreDisplay = document.querySelector ('.score')
var tooHigh = "that's too high";
var tooLow = "that's too low";
var randomNum = 0;
var playerCardGuess1 = 1;
var playerCardGuess2 = 1;

document.addEventListener('DOMContentLoaded', getRandomNum);
console.log(randomNum);
clearButton.addEventListener('click', clearInput);
updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitGuess);
document.addEventListener('DOMContentLoaded', disableButton);
clearButton.addEventListener('click', disableButton);
resetButton.addEventListener('click', disableButton);
resetButton.addEventListener('click', resetGame)
minRangeInput.addEventListener('keyup', disableExponent);
maxRangeInput.addEventListener('keyup', disableExponent);
chal1GuessInput.addEventListener('keyup', disableExponent);
chal2GuessInput.addEventListener('keyup', disableExponent);
chal1NameInput.addEventListener('keydown', enableButton);
chal2NameInput.addEventListener('keydown', enableButton);
chal1GuessInput.addEventListener('keydown', enableButton);
chal2GuessInput.addEventListener('keydown', enableButton);
minRangeInput.addEventListener('keydown', enableButton);
maxRangeInput.addEventListener('keydown', enableButton);

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
  rangeError();
  rangeError2();
  rangeMinOverMaxError();
  rangeMaxUnderMinError();
  stopRangeInput();
  console.log(randomNum)
  curMinRange.innerHTML = minRangeInput.value;
  curMaxRange.innerHTML = maxRangeInput.value;
  getRandomNum(parseInt(minRangeInput.value), parseInt(maxRangeInput.value));
}

function getRandomNum(min, max) {
  randomNum = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min) || Math.floor(Math.random() * (parseInt(100) - parseInt(1) + 1)) + parseInt(1)
  return randomNum;
}

function resetGame(e) {
  e.preventDefault();
  getRandomNum(parseInt(minRangeInput.value), parseInt(maxRangeInput.value));
  chal1GuessInput.value = '';
  chal2GuessInput.value = '';
}

function submitGuess(e) {
  e.preventDefault();
  guessingMessage1();
  guessingMessage2();
  numericErrorMessage1();
  numericErrorMessage2();
  nameErrorMessage1();
  nameErrorMessage2();
  cardWinner();
  cardWinner2();
  challengerName1.innerHTML = chal1NameInput.value.toUpperCase();
  challengerName2.innerHTML = chal2NameInput.value.toUpperCase();
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
  minRangeInput.value = '';
  maxRangeInput.value = '';
}

function guessingMessage1() {
  if (chal1GuessInput.value > randomNum) {
    document.querySelector('.guesser-score-p3').innerHTML = tooHigh;
  } else if (chal1GuessInput.value < randomNum){
    document.querySelector('.guesser-score-p3').innerHTML = tooLow;
  } else {
    document.querySelector('.guesser-score-p3').innerHTML = 'Boom';
  }
}

function guessingMessage2() {
  if (chal2GuessInput.value > randomNum) {
    document.querySelector('.guesser-score-p5').innerHTML = tooHigh;
  } else if (chal2GuessInput.value < randomNum){
    document.querySelector('.guesser-score-p5').innerHTML = tooLow;
  } else {
    document.querySelector('.guesser-score-p5').innerHTML = 'Boom';
  }
}


function numericErrorMessage1() {
  if (chal1GuessInput.value > parseInt(curMaxRange.innerText) || chal1GuessInput.value < parseInt(curMinRange.innerText)) {
    errorMessageNumber1.style.display = 'block';
  } else {
    errorMessageNumber1.style.display = 'none';
  }
}

function numericErrorMessage2() {
  if (chal2GuessInput.value > parseInt(curMaxRange.innerText) || chal2GuessInput.value < parseInt(curMinRange.innerText)) {
    errorMessageNumber2.style.display = 'block';
  } else {
    errorMessageNumber2.style.display = 'none';
  }
}

function nameErrorMessage1() {
  if (chal1NameInput.value == '' ) {
    errorMessageName1.style.display = 'block';
  } else {
    errorMessageName1.style.display = 'none';
  }
}

function nameErrorMessage2() {
  if (chal2NameInput.value == '' ) {
    errorMessageName2.style.display = 'block';
  } else {
    errorMessageName2.style.display = 'none';
  }
}


function rangeError() {
  if (minRangeInput.value == '' ) {
    rangeErrorMessage1.style.display = 'block';
  }
}

function rangeError2() {
  if (maxRangeInput.value == '' ) {
    rangeErrorMessage2.style.display = 'block';
  }
}

function rangeMaxUnderMinError() {
  if (maxRangeInput.value < minRangeInput.value) {
    rangeErrorMessage2.style.display = 'block'
  } else if (minRangeInput.value < maxRangeInput.value) {
    rangeErrorMessage2.style.display = 'none'
  }
}

function rangeMinOverMaxError() {
  if (maxRangeInput.value < minRangeInput.value) {
    rangeErrorMessage1.style.display = 'block'
  } else if (maxRangeInput.value > minRangeInput.value) {
    rangeErrorMessage1.style.display = 'none'
  }
}

function stopRangeInput () {
  if(maxRangeInput.value < minRangeInput.value) {
    minRangeInput.value = '';
    maxRangeInput.value = '';
  }
}

function cardWinner() {
  if(document.querySelector('.guesser-score-p3').innerHTML === 'Boom') {
  scoreDisplay.insertAdjacentHTML('afterbegin', 
    `<article class="score-card">
      <p class="score-card-p1"> ${chal1NameInput.value.toUpperCase()}<span class="score-card-span1"> vs </span>${chal2NameInput.value.toUpperCase()}</p>
      <h4 class="score-card-header1">${chal1NameInput.value.toUpperCase()}</h4>
      <h5 class="score-card-header2">WINNER</h5>
      <p class="score-card-p2"><span class="score-card-span2">${playerCardGuess2++}</span>GUESSES</p>
      <p class="score-card-p3"><span class="score-card-span3"></span></p>
      <button class="score-card-close">x</button>
    </article>`
    );
  }
}


function cardWinner2() {
  if(document.querySelector('.guesser-score-p5').innerHTML === 'Boom') {
  scoreDisplay.insertAdjacentHTML('afterbegin', 
    `<article class="score-card">
      <p class="score-card-p1"> ${chal1NameInput.value.toUpperCase()}<span class="score-card-span1"> vs </span>${chal2NameInput.value.toUpperCase()}</p>
      <h4 class="score-card-header1">${chal2NameInput.value.toUpperCase()}</h4>
      <h5 class="score-card-header2">WINNER</h5>
      <p class="score-card-p2"><span class="score-card-span2">${playerCardGuess1++}</span>GUESSES</p>
      <p class="score-card-p3"><span class="score-card-span3"></span></p>
      <button class="score-card-close">x</button>
    </article>`
    );
  }
}






