import Calculator from './calculator.js';

const calc = new Calculator();
const display = document.getElementById('display');
const operands = Array.from(document.getElementsByClassName('operand'));
const operators = Array.from(document.getElementsByClassName('operator'));

function operandPressed() {
    display.innerHTML += this.textContent;
};
function operatorPressed() {
    display.innerHTML = '';
};

operands.forEach(element => {
    element.addEventListener('click', operandPressed);
});
operators.forEach(element => {
    element.addEventListener('click', operatorPressed);
});

