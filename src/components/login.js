import React, { Component } from 'react';
import Header from './Header/header';
import { firebase, googleAuth } from '../firebase';

class Login extends Component {
  state = {
    status: false
  }

  signIn = () => {
    firebase.auth().signInWithPopup(googleAuth)
  }

  signOut = () => {
    firebase.auth().signOut()
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      this.setState({
        status: user ? true : false
      })
    })
  }

  render(){
    return(
      <div>
        <Header />
        {
          this.state.status ?
          <button onClick={ this.signOut }>Logout</button>
          :
          <button onClick={ this.signIn }>Login</button>
        }
      </div>
    )
  }
}

export default Login;

// this.signIn() => trigger immediately once the it is rendered
// this.signIn => trigger only when the button is clicked
