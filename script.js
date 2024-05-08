const isNumber = (value) => {
    return typeof value === "number";
}

const sumAction = (value1, value2) => {
    if (!isNumber(value1)) {
        return "Error, value1 is not a number";
    }
    if (!isNumber(value2)) {
        return "Error, value2 is not a number";
    }
    return value1 + value2;
}

const substractAction = (value1, value2) => {
    if (!isNumber(value1)) {
        return "Error, value1 is not a number";
    }
    if (!isNumber(value2)) {
        return "Error, value2 is not a number";
    }
    return value1 - value2;
}

const multiplyAction = (value1, value2) => {
    if (!isNumber(value1)) {
        return "Error, value1 is not a number";
    }
    if (!isNumber(value2)) {
        return "Error, value2 is not a number";
    }
    return value1 * value2;
}

const divideAction = (value1, value2) => {
    if (!isNumber(value1)) {
        return "Error, value1 is not a number";
    }
    if (!isNumber(value2)) {
        return "Error, value2 is not a number";
    }
    if (value2 === 0) {
        return "Error, cannot divide by '0'"
    }
    return value1 / value2;
}

const operate = (operator, number1, number2) => {
    if (operator === "+") {
        return sumAction(number1, number2);
    }
    
    if (operator === "-") {
        return substractAction(number1, number2);
    }

    if (operator === "*") {
        return multiplyAction(number1, number2);
    }

    if (operator === "/") {
        return divideAction(number1, number2);
    }

    return "Error, unknown operator";
}

let number1 = null;
let number2 = null;
let operator = null;
let displayValue = null;

const operateButtons = (buttonAction) => {
    if (isNumber(buttonAction)) {

    }
}

const display = document.querySelector(".display");

const button7 = document.querySelector("#button7");
button7.addEventListener("click", () => {
    if (!number1 || !operator) {
        number1 = 7;
        displayValue = number1;
    } else if (!number2) {
        number2 = 7;
        displayValue = `${number1} ${operator} ${number2}`;
    } else {
        displayValue = operate(operator, number1, number2);
        number1 = displayValue;
        number2 = null;
        operator = null;
    }
    display.textContent = displayValue;
})

const buttonSum = document.querySelector("#buttonSum");
buttonSum.addEventListener("click", () => {
    if (!number1) {
        return;
    } else if (number2) {
        displayValue = operate(operator, number1, number2);
        number1 = displayValue;
        number2 = null;
        operator = "+";
    } else {
        operator = "+";
    }

    if (!number2) {
        displayValue = `${number1} ${operator}`;
    } else {
        displayValue = `${number1} ${operator} ${number2}`;
    }

    display.textContent = displayValue;
})