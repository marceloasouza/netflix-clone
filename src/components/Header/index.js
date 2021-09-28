import React from 'react';
import './style.css';
import marca from '../../img/marca.png';
import logo from '../../img/logo.png';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={marca} />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
    </header>
  );
};
