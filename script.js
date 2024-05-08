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
    return Math.round((value1 + value2) * 100) / 100;
}

const substractAction = (value1, value2) => {
    if (!isNumber(value1)) {
        return "Error, value1 is not a number";
    }
    if (!isNumber(value2)) {
        return "Error, value2 is not a number";
    }
    return Math.round((value1 - value2) * 100) / 100;
}

const multiplyAction = (value1, value2) => {
    if (!isNumber(value1)) {
        return "Error, value1 is not a number";
    }
    if (!isNumber(value2)) {
        return "Error, value2 is not a number";
    }
    return Math.round((value1 * value2) * 100) / 100;
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
    return Math.round((value1 / value2) * 100) / 100;
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

const containsDecimal = (value) => {
    if (String(value).indexOf('.') !== -1) {
        return true;
    }
    return false;
}

const decimalLast = (value) => {
    const indexOfDecimal = String(value).indexOf('.');

    if ((String(value).length - 1) === indexOfDecimal) {
        return true;
    }

    return false;
}

const removeDecimal = (value) => {
    return Number(String(value).slice(0,-1));
}

let number1 = null;
let number2 = null;
let operator = null;
let displayValue = null;

const clear = () => {
    number1 = null;
    number2 = null;
    displayValue = null;
    operator = null;
    display.textContent = displayValue;
}

const operateNumberButtons = (value) => {
    if (!isNumber(value)) {
        console.error("Button is not a number button");
        return;
    }

    if (number1 === null) {
        number1 = value;
        displayValue = number1;
    } else if (operator === null) {
        number1 = Number(String(number1) + value);
        displayValue = number1;
    } else if (number2 === null) {
        number2 = value;
        displayValue = `${number1} ${operator} ${number2}`;
    } else {
        number2 = Number(String(number2) + value);
        displayValue = `${number1} ${operator} ${number2}`;
    }
    display.textContent = displayValue;
}

const operateOperatorButtons = (scopeOperator) => {
    if (String(displayValue).includes("Error")) {
        clear();
        return;
    }

    if (number1 === null) {
        return;
    } else if (number2 !== null && scopeOperator !== "=") {
        if (decimalLast(number2)) {
            number2 = removeDecimal(number2);
        }
        displayValue = operate(operator, number1, number2);
        number1 = displayValue;
        number2 = null;
        operator = scopeOperator;
    } else if (number2 !== null && scopeOperator === "=") {
        if (decimalLast(number2)) {
            number2 = removeDecimal(number2);
        }
        displayValue = operate(operator, number1, number2);
        number1 = displayValue;
        number2 = null;
        operator = null;
    } else if (scopeOperator !== "=") {
        if (decimalLast(number1)) {
            number1 = removeDecimal(number1);
        }
        operator = scopeOperator;
    } else {
        return;
    }

    if (scopeOperator === "=") {
        displayValue = number1;
    } else if (!number2) {
        displayValue = `${number1} ${operator}`;
    } else {
        displayValue = `${number1} ${operator} ${number2}`;
    }

    display.textContent = displayValue;
}

const display = document.querySelector(".display");

const numbers = document.querySelector(".numbers");
const numbersButtons = Array.from(numbers.querySelectorAll(".button")).slice(0, -1);

numbersButtons.forEach((button) => {
    const buttonId = button.getAttribute("id");

    const buttonNumber = Number(button.getAttribute("id").match(/\d+/)[0]);
    button.addEventListener("click", () => {
        operateNumberButtons(buttonNumber);
        if (buttonId === "button00") {
            operateNumberButtons(buttonNumber);
        }
    });
})

const buttonSum = document.querySelector("#buttonSum");
buttonSum.addEventListener("click", () => {
    operateOperatorButtons("+");
})

const buttonDivide = document.querySelector("#buttonDivide");
buttonDivide.addEventListener("click", () => {
    operateOperatorButtons("/");
})

const buttonMultiply = document.querySelector("#buttonMultiply");
buttonMultiply.addEventListener("click", () => {
    operateOperatorButtons("*");
})

const buttonSubstract = document.querySelector("#buttonSubstract");
buttonSubstract.addEventListener("click", () => {
    operateOperatorButtons("-");
})

const buttonEquals = document.querySelector("#buttonEquals");
buttonEquals.addEventListener("click", () => {
    operateOperatorButtons("=");
})

const buttonDecimal = document.querySelector("#buttonDecimal");
buttonDecimal.addEventListener("click", () => {
    if (number1 === null) return;

    if (containsDecimal(number1) && number2 === null) return;

    if (number2 === null) {
        number1 = number1 + ".";
        displayValue = number1;
    } else if (!containsDecimal(number2)) {
        number2 = number2 + ".";
        displayValue = `${number1} ${operator} ${number2}`;
    }

    display.textContent = displayValue;
})

const buttonClear = document.querySelector("#buttonClear");
buttonClear.addEventListener("click", () => {
    clear();
})