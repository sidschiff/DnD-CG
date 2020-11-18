const names = require('./data/names')

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getName = (race, gender) => {
  let split = race.split(' ')
  if (split.length > 1) {
    race = split[1]
  }

  let firstName, lastName;

  if (gender !== 'non') {
    let firstRandom = randomNumber(0, names.firstNames[race][gender].length - 1)
    firstName = names.firstNames[race][gender][firstRandom]
  } else if (gender === 'non') {
    // get a name from both male and female pools
    let firstMale = names.firstNames[race]['male'][randomNumber(0, names.firstNames[race]['male'].length - 1)]
    let firstFemale = names.firstNames[race]['female'][randomNumber(0, names.firstNames[race]['female'].length - 1)]
    // grab either the male or female as the nb option, randomly selected
    if (randomNumber(1, 2) == 1) firstName = firstMale
    else firstName = firstFemale
  }


  let lastRandom = randomNumber(0, names.lastNames[race].length - 1)
  lastName = names.lastNames[race][lastRandom]

  let name = firstName + ' ' + lastName

  return name
}

module.exports = {
  getName,
}