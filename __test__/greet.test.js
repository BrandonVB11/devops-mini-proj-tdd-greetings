const { greet, test2, test6, test7 } = require('../src/greet')
const { test, expect } = require('@jest/globals')

/*
Test1
*/
test('should return Hello, Brandon. when name is Brandon', () => {
  expect(greet('Brandon')).toEqual('Hello, Brandon.')
})

/*
Test2a
*/
test('should return hello my friend when name is null', () => {
  expect(test2(null)).toEqual('Hello, my friend.')
})

/*
Test2b
*/
test('should return hello my friend when name is undefined', () => {
  expect(test2(undefined)).toEqual('Hello, my friend.')
})

/*
Test2c
*/
test('should return hello my friend when name is empty', () => {
  expect(test2(' ')).toEqual('Hello, my friend.')
})

/*
Test3
*/
test('should return HELLO, BRANDON! when name is BRANDON', () => {
  expect(greet('BRANDON')).toEqual('HELLO, BRANDON!')
})

/*
Test4
*/
test('should return Hello, Brandon and Wen.', () => {
  expect(greet(['Brandon', 'Wen'])).toEqual('Hello, Brandon and Wen.')
})

/*
Test5
*/
test('should return Hello, Brandon,Wen,Lotfi when name is Brandon,Wen and Lotfi.', () => {
  expect(greet(['Brandon', 'Wen', 'Lotfi'])).toEqual('Hello, Brandon,Wen and Lotfi.')
})

/*
Test6
*/
test('should return Hello, Wen and Brandon. AND HELLO LOTFI !', () => {
  expect(test6(['Wen', 'LOTFI', 'Brandon'])).toEqual('Hello, Wen and Brandon. AND HELLO LOTFI !')
})

/*
Test7
*/

test('should return Hello, Marie and Jean. when names are Marie and Jean and language is en', () => {
  expect(test7(['Marie', 'Jean', 'en'])).toEqual('Hello, Marie and Jean.')
})

test('should return Hello, Marie and Jean. when names are Marie and Jean and language is en', () => {
  expect(test7(['Marie', 'Jean', 'fr'])).toEqual('Bonjour, Marie et Jean.')
})

test('should return Hello, Marie and Jean. when names are Marie and Jean and language is en', () => {
  expect(test7(['Marie', 'nl'])).toEqual('Hallo, Marie.')
})
