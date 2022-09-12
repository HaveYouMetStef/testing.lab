const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiple,
    divide,
} = require ('./functions.js')

test('return the number 2', () => {
    expect(returnTwo(2)).toEqual(2)
})

describe('math functions', () => {
test ('adding two numbers', () => {
    expect(add(1,2)).toBe(3)
})

test ('adding two other numbers', () => {
    expect(add(5,9)).toBe(14)
})

test ('subtracting numbers', () => {
    expect(subtract(10,2)).toBe(8)
})

test ('multiplying numbers', () => {
    expect(multiple(10,10)).toBe(100)
})

test ('dividing numbers', () => {
    expect(divide(10,2)).toBe(5)
})
})

describe('returning names', () => { 
test('return a greeting james', () => {
    expect(greeting('James')).toBe('Hello, James.')
})

test('return a greeting for jill', () => {
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

})