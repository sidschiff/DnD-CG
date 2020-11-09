import React from 'react';
import axios from 'axios';
import Form from './Form';
import Character from './Character';
import Login from './Login';
import Create from './Create';
import AbilityScore from './AbilityScore';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: null,
      authenticated: false,
      race: '',
      name: '',
      class: '',
      stats: {},
      characters: []
    }
  }

  handleNameRender(input) {
    this.setState({
      name: input
    })
  }

  handleClassRender(input) {
    this.setState({
      class: input
    })
  }

  handleRaceRender(input) {
    this.setState({
      race: input
    })
  }

  handleStatRender(input) {
    this.setState({
      stats: input
    })
  }

  handleLoginForm(input) {
    // console.log('input from login', input)
    let { username, squigle } = input
    if (username.length < 1 || username === null || undefined) {
      return null;
    }

    let data = {
      name: username,
      password: squigle,
      login: true
    }
    // console.log('user data getting sent', data)

    axios({
      method: 'post',
      url: 'http://localhost:3000/user',
      data: data
    })
      .then((response) => {
        // console.log('response from server', response)
        // If username/pass are found in database, and grab characters
        this.setState({
          username: username,
          authenticated: true,
          characters: response.data.characters
        }, () => {
          // console.log(this.state.characters)
        })
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
  }

  handleCreateForm(input) {
    let { username, squigle } = input

    let data = {
      name: username,
      password: squigle,
      create: true
    }
    // console.log('user data getting sent', data)
    axios({
      method: 'post',
      url: 'http://localhost:3000/user',
      data: data
    })
      .then((response) => {
        // console.log('response from server', response.data)
        // If username/pass are found in database, and grab characters
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
  }

  handleLogout(e) {
    this.setState({
      authenticated: false,
      characters: []
    })
  }

  handleSaveCharacter(e) {
    if (this.state.authenticated) {
      //Get the character
      let charData = {
        characterName: this.state.name,
        race: this.state.race,
        class: this.state.class,
        stats: this.state.stats
      }
      let userData = {
        name: this.state.username
      }
      //send to the db
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/char',
        data: {
          charData,
          userData
        }
      })
        .then((response) => {
          // console.log(response.data[0].characters)
          this.setState({
            characters: response.data[0].characters
          })
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      //Alert that you need to be logged in to save a character
      alert('You need to be logged in to save a character!')
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="pt-2">
          <div className="row justify-content-between">
            <div className="h4 col">
              Character Generator
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Character race={this.state.race} name={this.state.name} class={this.state.class} putstats={this.handleStatRender.bind(this)} save={this.handleSaveCharacter.bind(this)} />
            {this.state.authenticated
              ? (
                <div>
                  <div>
                    Logged in as {this.state.username}
                  </div>
                  <div className="h5">
                    Characters:
                  </div>
                </div>
              )
              : null}
            <div className="mpt-3 overflow-auto" style={{ height: 500 }}>
              {this.state.characters.length >= 1
                ? this.state.characters.map((char, i) => {
                  return (
                    <div className="mp-2">
                      <div>
                        Name:
                      {' '}
                        {char.characterName}
                      </div>
                      <div>
                        Race:
                      {' '}
                        {char.race}
                      </div>
                      <div>
                        Class:
                      {' '}
                        {char.class}
                      </div>
                      <div>
                        Ability Scores:
                        <AbilityScore str={char.stats.str} dex={char.stats.dex} con={char.stats.con} int={char.stats.int} wis={char.stats.wis} cha={char.stats.cha} />
                      </div>
                    </div>
                  )
                })
                : null}

            </div>
          </div>
          <div className="col">
            <Form putname={this.handleNameRender.bind(this)} putclass={this.handleClassRender.bind(this)} putrace={this.handleRaceRender.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;