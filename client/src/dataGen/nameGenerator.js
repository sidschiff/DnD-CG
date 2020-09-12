const names = require('./data/names')

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getName = (race, gender) => {
  let firstRandom = randomNumber(0, names.firstNames[race][gender].length - 1)
  let lastRandom = randomNumber(0, names.lastNames[race].length - 1)

  let name = names.firstNames[race][gender][firstRandom] + ' ' + names.lastNames[race][lastRandom]

  return name
}

console.log(getName('human', 'female'))