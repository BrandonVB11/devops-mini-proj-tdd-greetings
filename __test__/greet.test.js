const { greet, test6 } = require('../src/greet')
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

/*
Test4
*/
test('should return Hello, Brandon and Wen.', () => {
  expect(greet(['Brandon', 'Wen'])).toEqual('Hello, Brandon and Wen.')
})

test('should return Hello, Amy and Charlotte. AND HELLO BRIAN !', () => {
  expect(test6(['Amy', 'BRIAN', 'Charlotte'])).toEqual('Hello, Amy and Charlotte. AND HELLO BRIAN !')
})
