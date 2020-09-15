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
      username: '',
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
        // console.log('response from server', response.data)
        // If username/pass are found in database, and grab characters
        this.setState({
          username: username,
          authenticated: true,
          characters: response.data.characters
        }, () => {
          console.log(this.state.characters)
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


  render() {
    return (
      <div className="container-fluid">
        <div className="pt-2">
          <div className="row justify-content-between">
            <div className="h5 col">
              Character Generator
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#loginModal">Login</button>
              <button type="button" className="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#createModal">Create Account</button>
            </div>
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="loginModal">Login</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Login grab={this.handleLoginForm.bind(this)} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModal" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="createModal">Create Account</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Create grab={this.handleCreateForm.bind(this)} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Character race={this.state.race} name={this.state.name} class={this.state.class} putstats={this.handleStatRender.bind(this)} />
            {' '}
            <div>
              Characters:
              {this.state.characters.length >= 1
              ? this.state.characters.map((char, i) => {
                return (
                  <div>
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