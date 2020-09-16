import React from 'react';
import name from '../dataGen/nameGenerator';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formRace: '',
      formGender: '',
      formClass: '',
    }
  }

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

  handleFormSubmit(e) {
    // Grab inputs
    let nameParam = {
      race: this.state.formRace,
      gender: this.state.formGender
    }
    // call function with params
    let characterName = name.getName(nameParam.race, nameParam.gender)
    let characterClass = this.state.formClass
    let characterRace = this.state.formRace
    // console.log(characterName, characterClass)
    // Give it to App
    this.props.putname(characterName)
    this.props.putclass(characterClass)
    this.props.putrace(characterRace)
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
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
          <div className="form-group">
            <label>Gender</label>
            <select className="form-control" value={this.state.formGender} onChange={this.handleFormGender.bind(this)}>
              <option value="">--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
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
        </form>
        <button type="button" className="btn btn-outline-secondary" onClick={this.handleFormSubmit.bind(this)}>Get a Character!</button>
      </div>
    )
  }
}

export default Form