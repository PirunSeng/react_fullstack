import React, { Component } from 'react';

class Uncontrolled extends Component {

  handleSignIn = (event) => {
    event.preventDefault()
    const value = {
      first_name: this.first_name.value,
      last_name: this.last_name.value
    }

    console.log(value)
  }

  render(){
    return(
      <div>
        <div className="container">
          <form>
            <div className="form_element">
              <label>First Name </label>
              <input type="text"
                ref={input => this.first_name = input}
              />
            </div>
            <div className="form_element">
              <label>Last Name </label>
              <input type="text"
                ref={input => this.last_name = input}
              />
            </div>
            <button onClick={this.handleSignIn}> Sing in </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Uncontrolled;
