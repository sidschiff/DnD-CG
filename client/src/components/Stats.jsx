import React from 'react';

function Stats(props) {
  // Helper Functions and things
  let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let race = props.race

  let stats = {
    str: 8,
    dex: 8,
    con: 8,
    int: 8,
    wis: 8,
    cha: 8
  }

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
    let randomStat = numToStat[this.randomNumber(1, 6)]
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