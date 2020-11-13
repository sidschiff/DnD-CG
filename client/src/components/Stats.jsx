import React from 'react';

function Stats(race, charClass, random) {
  // Helper Functions and things

  // Weighted number distribution function
  let weightedNumber = (spec) => {
    let i, j, table = []
    for (i in spec) {
      for (j = 0; j <= spec[i]; j++) {
        table.push(i)
      }
    }
    return table[Math.floor(Math.random() * table.length)]
  }

  // Creates spec for weighted number function
  let createSpec = (charClass, random) => {
    let spec = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1}
    if (!random) {
      // Increase weight of stats based on class
      if (charClass == "Barbarian") {
        spec[1] += 5
        spec[3] += 3
      }
      if (charClass == "Bard") {
        spec[6] += 5
        spec[2] += 3
      }
      if (charClass == "Cleric") {
        spec[5] += 5
        spec[1] += 2
        spec[3] += 1
      }
      if (charClass == "Druid") {
        spec[5] += 5
        spec[3] += 3
      }
      if (charClass == "Fighter") {
        spec[1] += 2
        spec[2] += 2
        spec[3] += 2
        spec[4] += 2
      }
      if (charClass == "Monk" || charClass == "Ranger") {
        spec[2] += 5
        spec[5] += 3
      }
      if (charClass == "Paladin") {
        spec[1] += 5
        spec[6] += 3
      }
      if (charClass == "Rogue") {
        spec[2] += 5
        spec[6] += 2
        spec[4] += 1
      }
      if (charClass == "Sorceror" || charClass == "Warlock") {
        spec[6] += 5
        spec[3] += 3
      }
      if (charClass == "Wizard") {
        spec[4] += 5
        spec[2] += 2
        spec[3] += 1
      }
    }
    return spec
  }

  // Baseline stats
  let stats = {
    str: 8,
    dex: 8,
    con: 8,
    int: 8,
    wis: 8,
    cha: 8
  }

  // Key for stat distribution
  let numToStat = {
    1: 'str',
    2: 'dex',
    3: 'con',
    4: 'int',
    5: 'wis',
    6: 'cha'
  }

  // Using Point Buy System, Allocate Points
  let pool = 27
  while (pool >= 0) {
    // pick random stat
    let randomStat = numToStat[weightedNumber(createSpec(charClass, random))]
    let randomStatValue = stats[randomStat]
    // if stat isn't 15
    if (randomStatValue < 15) {
      // increment stat
      stats[randomStat]++
      // decrease pool based off increment
      if (stats[randomStat] <= 13) {
        pool -= 1
      } else {
        pool -= 2
        if (pool < 0) {
          stats[randomStat]--
          pool += 2
        }
      }
    }
  }

  // Add Racial Bonus
  if (race === 'Human') {
    stats.str += 1
    stats.dex += 1
    stats.con += 1
    stats.int += 1
    stats.wis += 1
    stats.cha += 1
  }
  if (race === 'High Elf') {
    stats.dex += 2
    stats.int += 1
  }
  if (race === 'Wood Elf') {
    stats.dex += 2
    stats.wis += 1
  }
  if (race === 'Dark Elf') {
    stats.dex += 2
    stats.cha += 1
  }
  if (race === 'Lightfoot Halfling') {
    stats.dex += 2
    stats.cha += 1
  }
  if (race === 'Stout Halfling') {
    stats.dex += 2
    stats.con += 1
  }
  if (race === 'Hill Dwarf') {
    stats.con += 2
    stats.wis += 1
  }
  if (race === 'Mountain Dwarf') {
    stats.con += 2
    stats.str += 2
  }
  if (race === 'Dragonborn') {
    stats.str += 2
    stats.cha += 1
  }
  if (race === 'Forest Gnome') {
    stats.int += 2
    stats.dex += 1
  }
  if (race === 'Rock Gnome') {
    stats.int += 2
    stats.con += 1
  }

  return stats
}

export default Stats;