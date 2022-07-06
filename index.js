import Calculator from './calculator.js';

const calc = new Calculator();
const display = document.getElementById('display');
const title = document.getElementById('title');
const operands = Array.from(document.getElementsByClassName('operand'));
const operators = Array.from(document.getElementsByClassName('operator'));
const functions = Array.from(document.getElementsByClassName('function'));
const clearButton = document.getElementById('clear');

let tabOperands = [];
let tabOperators = [];
let tabHisto = [];


function operandPressed() {
    if (tabOperators.length > 0 && display.innerHTML == tabOperands[tabOperands.length - 1]) {
        display.innerHTML = '';
    }
    display.innerHTML += this.textContent;
};

function operatorPressed() {
    if (isNaN(parseInt(display.innerHTML)) == false) {
        tabOperands.push(parseInt(display.innerHTML));
        tabOperators.push(this.textContent);
        checkForOperate(true);
    }
};

function checkForOperate(isEqual = false) {
    let result;

    if (tabOperators.length > 0 && tabOperands.length >= 2) {
        result = calc.operate(tabOperators[0], tabOperands[0], tabOperands[1]);
        if (isNaN(parseInt(result))) {
            title.innerHTML = result;
            clear();
            return;
        } else {
            display.innerHTML = result;
        }

        tabHisto.push('' + tabOperands[0] + ' ' + tabOperators[0] + ' ' + tabOperands[1] + ' = ' + result);
        tabOperands[1] = result;
    }

    if (tabOperators[tabOperators.length - 1] == '=') {
        tabOperands = [];
        tabOperators = [];
    } else {
        tabOperands[0] = tabOperands.pop();
        tabOperators[0] = tabOperators.pop();
    }
};

function clear() {
    tabOperands = [];
    tabOperators = [];
    tabHisto = [];
    display.innerHTML = '';
    clearButton.innerHTML = 'AC';
};


operands.forEach(element => {
    element.addEventListener('click', operandPressed);
});
operators.forEach(element => {
    element.addEventListener('click', operatorPressed);
});
functions.forEach(element => {
    switch (element.id) {
        case 'clear':
            element.addEventListener('click', clear);
            break;
    }
});
