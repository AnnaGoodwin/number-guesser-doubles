var numberInput1 = document.querySelector('.verify-input1')
var numberInput2 = document.querySelector('.verify-input2')
var updateButton = document.querySelector('.guesser-range-form-button')
var curRange1 = document.querySelector('.guesser-guess-range-bold1')
var curRange2 = document.querySelector('.guesser-guess-range-bold2')
var numberInput3 = document.querySelector('.verify-input3')
var numberInput4 = document.querySelector('.verify-input4')

updateButton.addEventListener('click', updateRange)

numberInput1.addEventListener('keyup', disableExponent);
numberInput2.addEventListener('keyup', disableExponent);
numberInput3.addEventListener('keyup', disableExponent);
numberInput4.addEventListener('keyup', disableExponent);

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
  getRandomNum(numberInput1.value, numberInput2.value);
  console.log(Math.floor(Math.random() * numberInput2.value - numberInput1.value + 1) + numberInput1.value);
}

function getRandomNum(min, max) {
  var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum = parseInt(randomNum);
}