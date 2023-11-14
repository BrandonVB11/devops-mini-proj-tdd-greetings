function greet (name) {
  if (name === name.toUpperCase()) {
    return 'HELLO, ' + name + '!'
  }
  return 'Hello, ' + name + '.'
}

module.exports = greet
