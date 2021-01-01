
//dom

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
        
    button.addEventListener('mouseover', () => {
        button.style.cssText = 'background-color: white';
    });

    button.addEventListener('mouseout', () => {
        button.style.cssText = 'background-color: grey';
    });
});


const sumText = document.getElementById("sumText");
const displayText = document.getElementById("displayText");

const calcRoot = document.getElementById("root");
const calcPower = document.getElementById("power");
const clear = document.getElementById("clear");
const opDivide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const opMultiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const opMinus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const opPlus = document.getElementById("plus");
const negateNumber = document.getElementById("negateNumber");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");

//button event listeners

clear.addEventListener('click', () => {
    displayText.textContent = "";
    sumText.textContent = "";
});






//operator functions

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
