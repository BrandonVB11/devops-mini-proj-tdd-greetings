function greet (name) {
  if (Array.isArray(name) && name.length === 3) {
    return `Hello, ${name[0]},${name[1]} and ${name[2]}.`
  }
  if (Array.isArray(name) && name.length === 2) {
    return `Hello, ${name[0]} and ${name[1]}.`
  }
  if (typeof name === 'string' && name === name.toUpperCase()) {
    return 'HELLO, ' + name + '!'
  }
  return 'Hello, ' + name + '.'
}

function test2 (name) {
  if (name === null || name === undefined || name === ' ') {
    return 'Hello, my friend.'
  }
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
  const greetings = {
    fr: `Bonjour, ${name}.`,
    en: `Hello, ${name}.`,
    nl: `Hallo, ${name}.`
  }

  return greetings[language] || greetings.fr
}

module.exports = { greet, test2, test6, test7 }
