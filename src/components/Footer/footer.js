import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';

import style from './footer.css';

const Footer = () => (
  <div className={style.footer}
  >
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba logo"/>
    </Link>
    <div className={style.right}>
      @NBA {CURRENT_YEAR} all right reserved.
    </div>
  </div>
)

export default Footer;
