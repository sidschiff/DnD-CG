import React from 'react';
import name from '../dataGen/nameGenerator';
import Stats from './Stats.jsx';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      formRace: '',
      formGender: '',
      formClass: '',
      name: null,
      stats: null,
      optimize: false
    }
  }

  ///////////////////////////////

  handleFormRace(e) {
    this.setState({
      formRace: e.target.value
    })
  }

  handleFormGender(e) {
    this.setState({
      formGender: e.target.value
    })
  }

  handleFormClass(e) {
    this.setState({
      formClass: e.target.value
    })
  }

  handleOptimizeCheck(e) {
    this.setState({
      optimize: !this.state.optimize
    })
  }

  handleFormSubmit(e) {
    // Grab inputs
    let nameParam = {
      race: this.state.formRace,
      gender: this.state.formGender
    }
    // call function with params
    let characterName = name.getName(nameParam.race, nameParam.gender)
    if (!this.state.optimize) {
      let stats = Stats(this.state.formRace)
    }
    else if (this.state.optimize) {
      let stats = Stats(this.state.formRace, this.state.formClass, true)
    }

    // Give it to App
    this.setState({
      name: characterName,
      stats: stats
    })
  }

  ///////////////////////////////

  render() {
    return (
      <div>
        <div className="navbar">
          <div>
            DnD 5e Character Generator
          </div>
          <div>
            <form className="row">
              <div className="form-group col">
                <label>Race</label>
                <select className="form-control" value={this.state.formRace} onChange={this.handleFormRace.bind(this)}>
                  <option value="">--</option>
                  <option value="Hill Dwarf">Hill Dwarf</option>
                  <option value="Mountain Dwarf">Mountain Dwarf</option>
                  <option value="High Elf">High Elf</option>
                  <option value="Wood Elf">Wood Elf</option>
                  <option value="Dark Elf">Dark Elf</option>
                  <option value="Lightfoot Halfling">Lightfoot Halfling</option>
                  <option value="Stout Halfling">Stout Halfling</option>
                  <option value="Human">Human</option>
                  <option value="Dragonborn">Dragonborn</option>
                  <option value="Forest Gnome">Forest Gnome</option>
                  <option value="Rock Gnome">Rock Gnome</option>
                </select>
              </div>
              <div className="form-group col">
                <label>Gender</label>
                <select className="form-control" value={this.state.formGender} onChange={this.handleFormGender.bind(this)}>
                  <option value="">--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group col">
                <label>What do you want to do?</label>
                <select className="form-control" value={this.state.formClass} onChange={this.handleFormClass.bind(this)}>
                  <option value="">--</option>
                  <option value="Barbarian">Get mad</option>
                  <option value="Bard">Sing spells</option>
                  <option value="Cleric">Serve a Higher Power</option>
                  <option value="Druid">Do nature things</option>
                  <option value="Fighter">Fight stuff with weapons</option>
                  <option value="Monk">Fight stuff with your body</option>
                  <option value="Paladin">Go on a crusade</option>
                  <option value="Ranger">Shoot stuff</option>
                  <option value="Rogue">Be all sneaky</option>
                  <option value="Sorceror">Be the spells</option>
                  <option value="Warlock">Make a deal with a Higher Power</option>
                  <option value="Wizard">Learn spells</option>
                </select>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={this.state.optimize} id="optimizebox" onClick={this.handleOptimizeCheck.bind(this)} />
                <label className="form-check-label" htmlFor="optimizebox" >Optimize the stats?</label>
              </div>
            </form>
            <button type="button" className="btn btn-outline-secondary" onClick={this.handleFormSubmit.bind(this)}>Get a Character!</button>
          </div>
        </div>
        <div className="charpreview">
          <div>
            Name:
            {' '}
            {this.state.name
              ? this.state.name
              : null}
          </div>
          <div>
            Race:
            {' '}
            {this.state.formRace.length > 1
              ? this.state.formRace
              : null}
          </div>
          <div>
            Class:
            {' '}
            {this.state.formClass.length > 1
              ? this.state.formClass
              : null}
          </div>
          <div>
            Ability Scores:
            {this.state.stats
              ? (
                <div>
                  <div>
                    Strength:
                    {' '}
                    {this.state.stats.str}
                  </div>
                  <div>
                    Dexterity:
                    {' '}
                    {this.state.stats.dex}
                  </div>
                  <div>
                    Constitution:
                    {' '}
                    {this.state.stats.con}
                  </div>
                  <div>
                    Intelligence:
                    {' '}
                    {this.state.stats.int}
                  </div>
                  <div>
                    Wisdom:
                    {' '}
                    {this.state.stats.wis}
                  </div>
                  <div>
                    Charisma:
                    {' '}
                    {this.state.stats.cha}
                  </div>
                </div>
                )
              : null}
          </div>
        </div>
      </div>
    )
  }
}

export default App