import React from 'react';
import AbilityScore from './AbilityScore'

class Character extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // Set baseline stats
      stats: {
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8
      },
      currentName: ''
    }
  }
  // Helper Functions and things
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setStats(race) {
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
    if (race === 'human') {
      stats.str += 1
      stats.dex += 1
      stats.con += 1
      stats.int += 1
      stats.wis += 1
      stats.cha += 1
    }

    // Set final stats to state
    this.setState({
      stats: {
        str: stats.str,
        dex: stats.dex,
        con: stats.con,
        int: stats.int,
        wis: stats.wis,
        cha: stats.cha
      }
    })
  }

  componentDidUpdate() {
    if (this.state.currentName !== this.props.name) {
      this.setState({
        currentName: this.props.name
      }, () => {
        // console.log('Set current name to ', this.state.currentName)
        this.setStats(this.props.race)
      })
    }
  }

  render() {

    return (
      <div className="">
        <div>
          Name:
            {' '}
          {this.props.name}
        </div>
        <div>
          Class:
            {' '}
          {this.props.class}
        </div>
        <div>
          Ability Scores:
          {this.props.race
          ? <AbilityScore str={this.state.stats.str} dex={this.state.stats.dex} con={this.state.stats.con} int={this.state.stats.int} wis={this.state.stats.wis} cha={this.state.stats.cha} />
          : null}
        </div>
      </div>
    )
  }
}

export default Character;