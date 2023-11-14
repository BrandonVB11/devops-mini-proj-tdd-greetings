function greet (name) {
  if (name === null || name === undefined || name === ' ') {
    return 'Hello, my friend.'
  }
  if (Array.isArray(name) && name.length === 2) {
    return `Hello, ${name[0]} and ${name[1]}.`
  }
  if (Array.isArray(name) && name.length === 3) {
    return `Hello, ${name[0]}, ${name[1]} and ${name[2]}.`
  }
  if (name === name.toUpperCase()) {
    return 'HELLO, ' + name + '!'
  }
  return 'Hello, ' + name + '.'
}

module.exports = greet
