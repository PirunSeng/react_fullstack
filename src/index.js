import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from './firebase';

import Routes from './routes';

const App = () => {
  return(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log('Logged in!')
  }else{
    console.log('Logged out!')
  }
})
