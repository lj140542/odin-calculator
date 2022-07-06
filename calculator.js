function Calculator() {

    this.add = function (x, y) {
        return x + y;
    };

    this.substract = function (x, y) {
        return (x) - (y);
    };

    this.multiply = function (x, y) {
        return x * y;
    };

    this.divide = function (x, y) {
        if (y == 0) {
            return 'Genius\'s Calculator';
        }

        return x / y;
    };

    this.operate = function (operator, x, y) {
        switch (operator) {
            case '+': return this.add(x, y);
            case '-': return this.substract(x, y);
            case '*': return this.multiply(x, y);
            case '/': return this.divide(x, y);
        }
    };
};

// module.exports = Calculator;
export default Calculator;