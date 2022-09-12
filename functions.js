const returnTwo = () => {
    return 2
}

const greeting = (name) => {
    return `Hello, ${name}.`
}

function add(num1, num2) {
    
    let sum = num1 + num2
    
    return sum
}

function subtract(num1, num2) {

    let sub = num1 - num2
    
    return sub
}

function multiple(num1, num2) {

    let product = num1 * num2
    
    return product
}

function divide(num1, num2) {

    let div = num1 / num2
    
    return div
}




module.exports = {
    returnTwo,
    greeting,
    add,
    subtract,
    multiple,
    divide
}