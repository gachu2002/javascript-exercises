const fibonacci = function(a) {
    a = parseInt(a);
    if (a < 0) {
        return "OOPS";
    } else if (a <= 1) {
        return a;
    } else {
        return fibonacci(a - 1) + fibonacci(a - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
