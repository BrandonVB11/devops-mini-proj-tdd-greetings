const greet = require('../src/greet')
const { test, expect } = require('@jest/globals')

test('should return Hello, Brandon. when name is Brandon', () => {
  expect(greet('Brandon')).toBe('Hello, Brandon.')
})

/*
Test2a
*/
test('should return hello my friend when name is null', () => {
  expect(greet(null)).toEqual('Hello, my friend.')
})

/*
Test2b
*/
test('should return hello my friend when name is undefined', () => {
  expect(greet(undefined)).toEqual('Hello, my friend.')
})

/*
Test2c
*/
test('should return hello my friend when name is empty', () => {
  expect(greet(' ')).toEqual('Hello, my friend.')
})

test('should return HELLO, BRANDON! when name is BRANDON', () => {
  expect(greet('BRANDON')).toBe('HELLO, BRANDON!')
})

test('should return Hello, Brandon and Wen.', () => {
  expect(greet(['Brandon', 'Wen'])).toBe('Hello, Brandon and Wen.')
})
