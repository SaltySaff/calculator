let add = function(a, b) {
    return a + b;
}

let subtract = function(a, b) {
    return a - b;
}

let multiply = function(a, b) {
    return a * b;
}

let divide = function(a, b) {
    return a / b;
}

let operate = function(operator, a, b) {
    return operator(a, b);
}

console.log(operate(divide, 1, 2));
