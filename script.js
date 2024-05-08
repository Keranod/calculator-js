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

console.log("sumAction")
console.log(sumAction(12,45))
console.log(sumAction(12.44,422))
console.log(sumAction(-112,0.45))
console.log(sumAction(null,45))
console.log(sumAction(12,"ASD"))

const substractAction = (value1, value2) => {
    if (!isNumber(value1)) {
        return "Error, value1 is not a number";
    }
    if (!isNumber(value2)) {
        return "Error, value2 is not a number";
    }
    return value1 - value2;
}

console.log("substractAction")
console.log(substractAction(12,45))
console.log(substractAction(12.44,422))
console.log(substractAction(-112,0.45))
console.log(substractAction(null,45))
console.log(substractAction(12,"ASD"))

const multiplyAction = (value1, value2) => {
    if (!isNumber(value1)) {
        return "Error, value1 is not a number";
    }
    if (!isNumber(value2)) {
        return "Error, value2 is not a number";
    }
    return value1 * value2;
}

console.log("multiplyAction")
console.log(multiplyAction(12,45))
console.log(multiplyAction(12.44,422))
console.log(multiplyAction(-112,0.45))
console.log(multiplyAction(null,45))
console.log(multiplyAction(12,"ASD"))

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

console.log("divideAction")
console.log(divideAction(12,45))
console.log(divideAction(12.44,0))
console.log(divideAction(-112,0.45))
console.log(divideAction(null,45))
console.log(divideAction(12,"ASD"))