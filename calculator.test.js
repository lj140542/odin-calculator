const Calculator = require("./calculator");

describe("Calculator class tests", () => {
    const calculator = new Calculator();

    // add method's tests
    test('adds two number together', () => {
        expect(calculator.add(6, 2)).toBe(8);
    });
    test('adds a positive number to a negative one', () => {
        expect(calculator.add(-6, 2)).toBe(-4);
    });
    test('adds two negative number together', () => {
        expect(calculator.add(-6, -2)).toBe(-8);
    });
    test('adds 0', () => {
        expect(calculator.add(6, 0)).toBe(6);
    });
    test('pass only one number', () => {
        expect(calculator.add(6)).toBe(NaN);
    });
    test('pass no number', () => {
        expect(calculator.add()).toBe(NaN);
    });
    test('pass 3 numbers', () => {
        expect(calculator.add(6, 2, 3)).toBe(8);
    });

    // substract method's tests
    test('subtract two number together', () => {
        expect(calculator.substract(6, 2)).toBe(4);
    });
    test('substract a positive number from a negative one', () => {
        expect(calculator.substract(-6, 2)).toBe(-8);
    });
    test('substract two negative number together', () => {
        expect(calculator.substract(-6, -2)).toBe(-4);
    });
    test('pass only one number', () => {
        expect(calculator.substract(6)).toBe(NaN);
    });
    test('pass no number', () => {
        expect(calculator.substract()).toBe(NaN);
    });
    test('pass 3 numbers', () => {
        expect(calculator.substract(6, 2, 3)).toBe(4);
    });

    // multiply method's tests
    test('multiply a number by another one', () => {
        expect(calculator.multiply(6, 2)).toBe(12);
    });
    test('multiply a number by 0',() => {
        expect(calculator.multiply(6, 0)).toBe(0);
    });
    test('multiply a positive number by a negative one', () => {
        expect(calculator.multiply(6, -2)).toBe(-12);
    });
    test('multiply two negative numbers together', () => {
        expect(calculator.multiply(-6, -2)).toBe(12);
    });
    test('pass only one number', () => {
        expect(calculator.multiply(6)).toBe(NaN);
    });
    test('pass no number', () => {
        expect(calculator.multiply()).toBe(NaN);
    });
    test('pass 3 numbers', () => {
        expect(calculator.multiply(6, 2, 3)).toBe(12);
    });

    // divide method's tests
    test('divide a number by another one', () => {
        expect(calculator.divide(6, 2)).toBe(3);
    });
    test('divide a number by 0', () => {
        expect(calculator.divide(6, 0)).toBe('Well played mister Poincaré !');
    });
    test('divide a positive number by a negative one', () => {
        expect(calculator.divide(6, -2)).toBe(-3);
    });
    test('divide two negative numbers together', () => {
        expect(calculator.divide(-6, -2)).toBe(3);
    });
    test('pass only one number', () => {
        expect(calculator.divide(6)).toBe(NaN);
    });
    test('pass no number', () => {
        expect(calculator.divide()).toBe(NaN);
    });
    test('pass 3 numbers', () => {
        expect(calculator.divide(6, 2, 3)).toBe(3);
    });

    // operate method's tests
    test('using the operate method to add numbers', () => {
        expect(calculator.operate('+',6,2)).toBe(8);
    });
    test('using the operate method to substract numbers', () => {
        expect(calculator.operate('-',6,2)).toBe(4);
    });
    test('using the operate method to multiply numbers', () => {
        expect(calculator.operate('*',6,2)).toBe(12);
    });
    test('using the operate method to divide numbers', () => {
        expect(calculator.operate('/',6,2)).toBe(3);
    });
});