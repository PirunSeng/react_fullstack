import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome'
import SideNav from './Sidenav/sidenav';

const Header = (props) => {
  const navBars = () => (
    <div className={style.navBars}>
      <FontAwesome name="bars"
        style={{
          color: "#fff",
          padding: "10px",
          cursor: "pointer"
        }}

        onClick={props.onShowNav}
      />
    </div>
  )

  const logo = () => (
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba logo"/>
    </Link>
  )

  return(
    <header className={style.header}>
      <SideNav {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;
