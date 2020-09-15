import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formUser: '',
      formP: '',
      formVP: '',
      verified: null
    }
  }

  handleFormUser(e) {
    this.setState({
      formUser: e.target.value
    })
  }

  handleFormPass(e) {
    this.setState({
      formP: e.target.value
    })
  }

  handleFormVerifyPass(e) {
    this.setState({
      formVP: e.target.value
    })
  }

  handleObject() {
    // console.log('clicked')
    let obj = {
      username: this.state.formUser,
      squigle: this.state.formP
    }
    if (this.state.formP === this.state.formVP) {
      this.setState({
        verified: true
      }, () => {
        if (this.state.verified) {
          this.props.grab(obj)
        }
      })
    } else {
      this.setState({
        verified: false
      })
    }

  }

  render() {
    return (
      <div>
          {this.state.verified === false
          ? (
            <div className="alert alert-danger" role="alert">
              Oops! The passwords don't match!
            </div>
          )
          : null}
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="username" onChange={this.handleFormUser.bind(this)}></input>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="password" onChange={this.handleFormPass.bind(this)}></input>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="verify password" onChange={this.handleFormVerifyPass.bind(this)}></input>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handleObject.bind(this)}>Create Account</button>
        </form>
      </div>
    )
  }
}

export default Create;