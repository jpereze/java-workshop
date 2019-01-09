// Functions are used to create repeatable
// code
let calculator = (num, num2, operator) => {
    if (operator === "add") {
        return num + num2
    } else if (operator === "divide") {
        return num / num2
    } else if (operator === "multiply") {
        return num * num2
    } else if (operator === "subtract") {
        return num + num2
    } else {
        return "not an operator"
    }
}

console.log(calculator(1, 2, 'multiply'))

calculator(1, calculator(2, 3, 'subtract'), 'divide')