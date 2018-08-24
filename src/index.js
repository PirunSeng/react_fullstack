import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from './firebase';
import Header from './components/Header/header';

import Routes from './routes';

const App = (props) => {
  return(
    <BrowserRouter>
      <div>
        <Header />
        <Routes { ...props } />
      </div>
    </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user)=>{
  ReactDOM.render(<App auth={user} />, document.getElementById('root'));
})
