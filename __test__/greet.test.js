const { greet, test6, test7 } = require('../src/greet')
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

/*
Test6
*/
test('should return Hello, Wen and Brandon. AND HELLO LOTFI !', () => {
  expect(test6(['Wen', 'LOTFI', 'Brandon'])).toEqual('Hello, Wen and Brandon. AND HELLO LOTFI !')
})

test('should return Bonjour, Marie. when name is Marie and language is fr', () => {
  expect(test7('Marie', 'fr')).toEqual('Bonjour, Marie.')
})

test('should return Hallo, Marie. when name is Marie and language is nl', () => {
  expect(test7('Marie', 'nl')).toEqual('Hallo, Marie.')
})

test('should return Hello, Marie. when name is Marie and language is en', () => {
  expect(test7('Marie', 'en')).toEqual('Hello, Marie.')
})
