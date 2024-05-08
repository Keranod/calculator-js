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

let number1 = 0;
let number2 = 0;
let operator = null;

console.log(operate("+",12,12))
console.log(operate(":",12,12))
console.log(operate("/",90,9))