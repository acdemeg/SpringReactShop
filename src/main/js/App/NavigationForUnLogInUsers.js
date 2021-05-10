import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import style from './styleNavBar';
import NavLinkComponent from './NavLinkComponent';

function NavigationForUnLogInUsers() {
  return (
    <>
      <ul>
        <li style={{ font: 'bold italic 120% serif' }}>
          <NavLink className="nav-link navbar-item" to="/">
            DIGITAL MARKET
          </NavLink>
        </li>
      </ul>
      <ul style={style.rightPartNavBar}>
        <NavLinkComponent path="/authorizationPage" title="Log In" />
        <NavLinkComponent path="/registration" title="Registration" />
      </ul>
    </>
  );
}

export default NavigationForUnLogInUsers;
