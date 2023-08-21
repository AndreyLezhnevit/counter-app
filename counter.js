const counterText = document.getElementById('js-counterValue');
const addButton = document.getElementById('js-addButton');
const resetButton = document.getElementById('js-reset');

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterText.innerText = counter;

addButton.addEventListener('click', function () {
	counter = counter + 1;

	counterText.innerText = counter;
})

resetButton.addEventListener('click', function () {
	counter = COUNTER_INITIAL_VALUE;

	counterText.innerText = counter
})