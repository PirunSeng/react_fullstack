import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header
      style={{
        background:'#cacaca',
        padding:'10px'
      }}
    >
      <div>
        <Link to="/uncontrolled"> Uncontrolled </Link>
        <Link to="/controlled"> Controlled </Link>
        <Link to="/user"> User </Link>
        <Link to="/login"> Login </Link>
      </div>
      <br/>
    </header>
  )
}

export default Header;
