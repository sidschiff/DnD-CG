import React from 'react';
import Form from './Form';
import Character from './Character';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      race: '',
      name: '',
      class: '',
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

  render() {
    return (
      <div className="container-fluid">
        <div className="h5">
          Character Generator
        </div>
        <div className="row">
          <div className="col">
            {this.state.name.length > 1
            ? <Character race={this.state.race} name={this.state.name} class={this.state.class} />
            : null
            }
          </div>
          <div className="col">
            <Form putname={this.handleNameRender.bind(this)} putclass={this.handleClassRender.bind(this)} putrace={this.handleRaceRender.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;