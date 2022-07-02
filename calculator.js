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
        if(y == 0) {
            return 'Well played mister Poincaré !';
        }

        return x / y;
    };
};

module.exports = Calculator;