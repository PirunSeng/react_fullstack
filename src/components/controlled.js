import React, { Component } from 'react';

class Controlled extends Component {
  state = {
    first_name: '',
    last_name: ''
  }

  handleFirstNameChanged = (event) => {
    let first_name = event.target.value
    this.setState({
      first_name:first_name
    })
  }

  handleLastNameChanged = (event) => {
    let last_name = event.target.value
    this.setState({
      last_name:last_name
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form_element">
              <label>First Name </label>
              <input type="text"
                onChange={this.handleFirstNameChanged}
                value={this.state.first_name}
              />
            </div>
            <div className="form_element">
              <label>Last Name </label>
              <input type="text"
                onChange={this.handleLastNameChanged}
                value={this.state.last_name}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Controlled;
