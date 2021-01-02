
//dom

const buttons = document.querySelectorAll(".button");
const numButtons = document.querySelectorAll(".numButton");

buttons.forEach((button) => {
        
    button.addEventListener('mouseover', () => {
        button.style.cssText = 'background-color: white';
    });

    button.addEventListener('mouseout', () => {
        button.style.cssText = 'background-color: grey';
    });
});

numButtons.forEach((numButton) => {
        
    numButton.addEventListener('mouseover', () => {
        numButton.style.cssText = 'background-color: white; color: black';
    });

    numButton.addEventListener('mouseout', () => {
        numButton.style.cssText = 'background-color: rgb(85, 84, 84); color: white';
    });
});

const sumText = document.getElementById("sumText");
const displayText = document.getElementById("displayText");

const bSpace = document.getElementById("bSpace");
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

const keyRecorder = [];
let storeNumber = "";
const storeNumbers = []

clear.addEventListener('click', () => {
    displayText.textContent = "";
    sumText.textContent = "";
    keyRecorder.splice(0, keyRecorder.length);
    storeNumber = "";
    storeNumbers.splice(0, storeNumbers.length);

});

bSpace.addEventListener('click', () => {
    displayText.textContent = displayText.textContent.substring(0, displayText.textContent.length - 1);
    keyRecorder.splice(keyRecorder.length - 1, 1);
    storeNumber = storeNumber.substring(0, storeNumber.length -1);

});

//display max character count

const maxCharCount = 16;



//numbers

one.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 1;
        storeNumber += 1;
        keyRecorder.push(1);
    }
});

two.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 2;
        keyRecorder.push(2);
        storeNumber += 2;
    }   
});

three.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 3;
        keyRecorder.push(3);
        storeNumber += 3;
    }   
});

four.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 4;
        keyRecorder.push(4);
        storeNumber += 4;
    }   
});

five.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 5;
        keyRecorder.push(5);
        storeNumber += 5;
    }   
});

six.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 6;
        keyRecorder.push(6);
        storeNumber += 6;
    }   
});

seven.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 7;
        keyRecorder.push(7);
        storeNumber += 7;
    }   
});

eight.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 8;
        keyRecorder.push(1);
        storeNumber += 8;
    }   
});

nine.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 9;
        keyRecorder.push(9);
        storeNumber += 9;
    }   
});

zero.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        displayText.textContent += 0;
        keyRecorder.push(0);
        storeNumber += 0;
    }   
});

decimal.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        if(storeNumber.indexOf(".") == -1) {
        displayText.textContent += ".";
        keyRecorder.push(".");
        storeNumber += ".";
        }
    }   
});

negateNumber.addEventListener('click', () => {
    if(displayText.textContent.length < maxCharCount) {
        if(displayText.textContent[0] == "-") {
            displayText.textContent = displayText.textContent.substring(1);
            storeNumber = storeNumber.substring(1);
        } else {
        displayText.textContent = "-" + displayText.textContent;
        keyRecorder.push(".");
        storeNumber = "-" + storeNumber;
        }
    }   
});


//operators

opPlus.addEventListener('click', () => {
    if(sumText.textContent == "" && displayText.textContent == "") {
        sumText.textContent += 0 + ` + `;
        displayText.textContent = "";
        keyRecorder.push("+");
    } else {
        sumText.textContent += displayText.textContent + ` + `; 
        displayText.textContent = "";
        keyRecorder.push("+");
    }
    storeNumbers.push(storeNumber);
    storeNumbers.push("+");
    storeNumber = "";

    if(storeNumbers[2] != undefined) { //if there is already 2 numbers
        switch(storeNumbers[1]) {
            case "+":
                storeNumbers[0] = operate(add, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "-":
                storeNumbers[0] = operate(minus, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "x":
                storeNumbers[0] = operate(multiply, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "÷":
                storeNumbers[0] = operate(divide, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "^":
                storeNumbers[0] = operate(power, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
        }
        storeNumbers.splice(1, 2);
    }
});

opMinus.addEventListener('click', () => {
    if(sumText.textContent == "" && displayText.textContent == "") {
        sumText.textContent += 0 + ` - `;
        displayText.textContent = "";
        keyRecorder.push("-");
    } else {
        sumText.textContent += displayText.textContent + ` - `; 
        displayText.textContent = "";
        keyRecorder.push("-");
    }
    storeNumbers.push(storeNumber);
    storeNumbers.push("-");
    storeNumber = "";

    if(storeNumbers[2] != undefined) { //if there is already 2 numbers
        switch(storeNumbers[1]) {
            case "+":
                storeNumbers[0] = operate(add, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "-":
                storeNumbers[0] = operate(minus, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "x":
                storeNumbers[0] = operate(multiply, pparseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "÷":
                storeNumbers[0] = operate(divide, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "^":
                storeNumbers[0] = operate(power, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
        }
        storeNumbers.splice(1, 2);
    }
});

opMultiply.addEventListener('click', () => {
    if(sumText.textContent == "" && displayText.textContent == "") {
        sumText.textContent += 0 + ` x `;
        displayText.textContent = "";
        keyRecorder.push("x");
    } else {
        sumText.textContent += displayText.textContent + ` x `; 
        displayText.textContent = "";
        keyRecorder.push("x");
    }
    storeNumbers.push(storeNumber);
    storeNumbers.push("x");
    storeNumber = "";

    if(storeNumbers[2] != undefined) { //if there is already 2 numbers
        switch(storeNumbers[1]) {
            case "+":
                storeNumbers[0] = operate(add, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "-":
                storeNumbers[0] = operate(minus, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "x":
                storeNumbers[0] = operate(multiply, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "÷":
                storeNumbers[0] = operate(divide, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "^":
                storeNumbers[0] = operate(power, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
        }
        storeNumbers.splice(1, 2);
    }
});

opDivide.addEventListener('click', () => {
    if(sumText.textContent == "" && displayText.textContent == "") {
        sumText.textContent += 0 + ` ÷ `;
        displayText.textContent = "";
        keyRecorder.push("÷");
    } else {
        sumText.textContent += displayText.textContent + ` ÷ `; 
        displayText.textContent = "";
        keyRecorder.push("÷");
    }
    storeNumbers.push(storeNumber);
    storeNumbers.push("÷");
    storeNumber = "";

    if(storeNumbers[2] != undefined) { //if there is already 2 numbers
        switch(storeNumbers[1]) {
            case "+":
                storeNumbers[0] = operate(add, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "-":
                storeNumbers[0] = operate(minus, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "x":
                storeNumbers[0] = operate(multiply, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "÷":
                storeNumbers[0] = operate(divide, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "^":
                storeNumbers[0] = operate(power, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
        }
        storeNumbers.splice(1, 2);
    }
});

calcPower.addEventListener('click', () => {
    if(sumText.textContent == "" && displayText.textContent == "") {
        sumText.textContent += 0 + ` ^ `;
        displayText.textContent = "";
        keyRecorder.push("^");
    } else {
        sumText.textContent += displayText.textContent + ` ^ `; 
        displayText.textContent = "";
        keyRecorder.push("^");
    }
    storeNumbers.push(storeNumber);
    storeNumbers.push("^");
    storeNumber = "";

    if(storeNumbers[2] != undefined) { //if there is already 2 numbers
        switch(storeNumbers[1]) {
            case "+":
                storeNumbers[0] = operate(add, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "-":
                storeNumbers[0] = operate(minus, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "x":
                storeNumbers[0] = operate(multiply, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "÷":
                storeNumbers[0] = operate(divide, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;
            case "^":
                storeNumbers[0] = operate(power, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
                break;

        }
        storeNumbers.splice(1, 2);
    }
});

//equals


equals.addEventListener('click', () => {
    if(sumText.textContent == "" && displayText.textContent == "") {
        sumText.textContent += 0 + ` = `;
        displayText.textContent = "";
        keyRecorder.push("=");
    } else {
        sumText.textContent += displayText.textContent + ` = `; 
        displayText.textContent = "";
        keyRecorder.push("=");
    }

    storeNumbers.push(storeNumber);
    storeNumber = "";

    switch(storeNumbers[1]) {
        case "+":
            displayText.textContent = operate(add, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
            break;
        case "-":
            displayText.textContent = operate(minus, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
            break;
        case "x":
            displayText.textContent = operate(multiply, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
            break;
        case "÷":
            displayText.textContent = operate(divide, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
            break;
        case "^":
            displayText.textContent = operate(power, parseFloat(storeNumbers[0]), parseInt(storeNumbers[2]));
            break;
    }
    
    
});

//operator functions

let add = function(a, b) {
    return a + b;
}

let minus = function(a, b) {
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

let power = function(a, b) {
    return a ** b;
}






