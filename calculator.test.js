const Calculator = require("./calculator");

describe("Calculator class tests", () => {
    const calculator = new Calculator();

    // add method's tests
    test('adds two number together', () => {
        expect(calculator.add(6, 2)).toBe(8);
    });

    // substract method's tests
    test('subtract two number together', () => {
        expect(calculator.substract(6, 2)).toBe(4);
    });

    // multiply method's tests
    test('multiply a number by another one', () => {
        expect(calculator.multiply(6, 2)).toBe(12);
    });

    // divide method's tests
    test('divide a number by another one', () => {
        expect(calculator.divide(6, 2)).toBe(3);
    });
});