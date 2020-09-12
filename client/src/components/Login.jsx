import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formUser: '',
      formPass: ''
    }
  }

  handleFormUser(e) {
    this.setState({
      formUser: e.target.value
    })
  }

  handleFormPass(e) {
    this.setState({
      formPass: e.target.value
    })
  }

  handleObject() {
    let obj = {
      username: this.state.formUser,
      password: this.state.formPass
    }

    this.props.grab(obj)
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="username" onChange={this.handleFormUser.bind(this)}></input>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="password" onChange={this.handleFormPass.bind(this)}></input>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handleObject.bind(this)}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;