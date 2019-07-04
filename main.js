var numberInput1 = document.querySelector('.verify-input1')
var numberInput2 = document.querySelector('.verify-input2')
var numberInput3 = document.querySelector('.verify-input3')
var numberInput4 = document.querySelector('.verify-input4')

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

