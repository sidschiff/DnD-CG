import React from 'react';
import axios from 'axios';
import Form from './Form';
import Character from './Character';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      race: '',
      name: '',
      class: '',
      stats: {},
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

  handleLogin(e) {

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
                  LOGIN FORM HERE
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Login</button>
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
                  CREATE ACCOUNT FORM HERE
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Create</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Character race={this.state.race} name={this.state.name} class={this.state.class} putstats={this.handleStatRender.bind(this)} />
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