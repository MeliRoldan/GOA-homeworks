let multiply = (num1 = 1, num2 = 1) => {
    return num1 * num2
}

let division = (num1 = 1, num2 = 1) => {
    return num1 / num2
}

let plus = (num1 = 1, num2 = 1) => {
    return num1 + num2
}

let minus = (num1 = 1, num2 = 1) => {
    return num1 - num2
}

let calculator = (num1 = 1, num2 = 1, operator) => {
    if (operator == '*') {
        return multiply(num1, num2)
    } else if (operator == '/') {
        return division(num1, num2)
    } else if (operator == '+') {
        return plus(num1, num2)
    } else if (operator == '-') {
        return minus(num1, num2)
    }
}

console.log(calculator(2, 5, "-"))