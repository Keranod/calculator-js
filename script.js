const isNumber = (value) => {
    return typeof value === "number";
}

const sumAction = (value1, value2) => {
    if (!isNumber(value1) || !isNumber(value2)) {
        return "Error";
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
    if (!isNumber(value1) || !isNumber(value2)) {
        return "Error";
    }
    return value1 - value2;
}

console.log("substractAction")
console.log(substractAction(12,45))
console.log(substractAction(12.44,422))
console.log(substractAction(-112,0.45))
console.log(substractAction(null,45))
console.log(substractAction(12,"ASD"))