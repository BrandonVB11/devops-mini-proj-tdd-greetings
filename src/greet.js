function greet (name) {
  if (name === null || name === undefined || name === ' ') {
    return 'Hello, my friend.'
  }
  if (Array.isArray(name) && name.length === 2) {
    return `Hello, ${name[0]} and ${name[1]}.`
  }

  if (typeof name === 'string' && name === name.toUpperCase()) {
    return 'HELLO, ' + name + '!'
  }
  return 'Hello, ' + name + '.'
}

function test6 (names) {
  const normalNames = []
  const uppercaseNames = []

  names.forEach(name => {
    if (typeof name === 'string' && name.trim() !== '') {
      if (name === name.toUpperCase()) {
        uppercaseNames.push(name)
      } else {
        normalNames.push(name)
      }
    }
  })

  let greeting = ''
  if (normalNames.length > 0) {
    greeting += `Hello, ${normalNames.join(' and ')}.`
  }

  if (uppercaseNames.length > 0) {
    if (greeting !== '') {
      greeting += ' '
    }
    greeting += `AND HELLO ${uppercaseNames.join(' ')} !`
  }

  return greeting
}

function test7 (name, language) {
  switch (language) {
    case 'fr':
      return `Bonjour, ${name}.`
    case 'en':
      return `Hello, ${name}.`
    case 'nl':
      return `Hallo, ${name}.`
  }
}

module.exports = { greet, test6, test7 }
