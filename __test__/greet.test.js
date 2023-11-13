const greet = require('../src/greet');
const { test,expect } = require('@jest/globals');

test('should return Hello, Brandon. when name is Brandon', () => {
    expect(greet('Brandon')).toBe('Hello, Brandon.');
})