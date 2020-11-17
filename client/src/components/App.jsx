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
      randomize: false
    }
  }

  ///////////////////////////////
  // Functions for controlled form

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

  handleRandomizeCheck(e) {
    this.setState({
      randomize: !this.state.randomize
    })
  }

  handleFormSubmit(e) {
    // Grab inputs, if no input assign random value
    let nameParam = {
      race: (this.state.formRace.length > 3 ? this.state.formRace : this.randomRace()),
      gender: (this.state.formGender.length > 3 ? this.state.formGender : this.randomGender())
    }
    let job = this.state.formClass.length > 3 ? this.state.formClass : this.randomClass()
    // call function with params
    let characterName = name.getName(nameParam.race, nameParam.gender)
    let stats = Stats(nameParam.race, job, this.state.randomize)

    // Give it to state
    this.setState({
      name: characterName,
      formRace: nameParam.race,
      formClass: job,
      formGender: nameParam.gender,
      stats: stats
    })
  }

  handleReset(e) {
    this.setState({
      formRace: '',
      formGender: '',
      formClass: '',
      name: null,
      stats: null,
      randomize: false
    })
  }

  ///////////////////////////////
  // Functions for if fields are not filled out
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomRace() {
    const options = ['Hill Dwarf', 'Mountain Dwarf', 'High Elf', 'Wood Elf', 'Dark Elf', 'Lightfoot Halfling', 'Stout Halfling', 'Human', 'Dragonborn', 'Forest Gnome', 'Rock Gnome']
    return options[this.randomNumber(0, options.length - 1)]
  }

  randomClass() {
    const options = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard']
    return options[this.randomNumber(0, options.length - 1)]
  }

  randomGender() {
    if (this.randomNumber(1, 2) == 1) return 'male'
    else return 'female'
  }
  ///////////////////////////////

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar row">
          <div className="col-sm">
            <h4 className="row">
              DnD 5e Character Generator
            </h4>
            <div className="">
              <p className="row">
                Names are randomly generated based on the race and gender selected, using a pool of the recommended names from the Player Handbook.
            </p>
              <p className="row">
                Using the Point Buy System stats are allocated via weighted random distribution based on the chosen class, though if you're feeling like you would like a completely random stat distribution that's also an option!
            </p>
            </div>
          </div>
          <div className="col">
            <form className="">
              <div className="row">
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
              </div>
              <div className="row">
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
                <div className="form-group col">
                  <label>Want true random stats?</label>
                  {/* <input className="form-check-input" type="checkbox" value={this.state.randomize} onClick={this.handleRandomizeCheck.bind(this)} /> */}
                  <select className="form-control" value={this.state.randomize} onChange={this.handleRandomizeCheck.bind(this)}>
                    <option value={false}>Nope!</option>
                    <option value={true}>Yeah!</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-outline-secondary" onClick={this.handleFormSubmit.bind(this)}>Get a Character!</button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-secondary" onClick={this.handleReset.bind(this)}>Reset Form</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
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