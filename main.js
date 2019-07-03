var numberInput = document.querySelector('.input')

numberInput.addEventListener('click', function () {
  var color = colorInput.value;
  console.log(color);
};

var h1 = document.querySelector('h1');
var button = document.querySelector('.guesser-guess-form-button');

button.addEventListener('click', function () {
  h1.innerText = 'You are a genius!!!'; event.preventDefault();
});

