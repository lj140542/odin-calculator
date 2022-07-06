import Calculator from './calculator.js';

const possibleOperators = ['/','*','-','+','='];
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


function operandPressed(keyOperand) {
    let operand;
    if (isNaN(parseInt(keyOperand)) == false) {
        operand = keyOperand;
    } else {
        operand = this.textContent;
    }

    if (operand == '.' && display.innerHTML.includes('.')) {
        return;
    }
    if (tabOperators.length > 0 && display.innerHTML == tabOperands[tabOperands.length - 1]) {
        display.innerHTML = '';
    }

    clearButton.innerHTML = 'C';
    display.innerHTML += operand;
};

function operatorPressed(keyOperator) {
    let operator;
    if (keyOperator.length == 1 && possibleOperators.includes(keyOperator) >= 0) {
        operator = keyOperator;
    } else {
        operator = this.textContent;
    }

    if (isNaN(parseInt(display.innerHTML)) == false) {
        if (display.innerHTML.includes('.')) {
            tabOperands.push(parseFloat(display.innerHTML));
        } else {
            tabOperands.push(parseInt(display.innerHTML));
        }

        tabOperators.push(operator);
        checkForOperate(true);
    }
};

function checkForOperate(isEqual = false) {
    let result;

    if (tabOperators.length > 0 && tabOperands.length >= 2) {
        result = calc.operate(tabOperators[0], tabOperands[0], tabOperands[1]);
        if (isNaN(parseInt(result)) == true) {
            title.innerHTML = result;
            clear();
            return;
        } else {
            if (result.toString().includes('.')) {
                result = parseFloat(result).toFixed(2);
            }
            display.innerHTML = result
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

function clear(bForce = false) {
    if (bForce == true || clearButton.innerHTML == 'AC') {
        tabOperands = [];
        tabOperators = [];
        tabHisto = [];
    }
    display.innerHTML = '';
    clearButton.innerHTML = 'AC';
};

function inputHandle(e) {
    let keyPressed = e.key;
    if (keyPressed == 'Backspace') {
        clear();
    }
    if (keyPressed == 'Enter') {
        keyPressed = '=';
    }

    if (isNaN(parseInt(keyPressed)) == false) {
        operandPressed(keyPressed);
    } else if (keyPressed.length == 1 && possibleOperators.includes(keyPressed) >= 0) {
        operatorPressed(keyPressed);
    }
}

window.addEventListener('keydown', inputHandle);
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
