import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import style from './styleNavBar';
import { Basket } from '../components/Cart';
import LogOut from './LogOut'
import NavLinkComponent from './NavLinkComponent';
import { usersRoleEnum } from '../constants';
import MiniAvatar from './MiniAvatar';

function NavigationForLogInUsers({ profile: { imagePath, name, role } }) {
  return (
    <>
      <ul>
        <li style={{ font: 'bold italic 110% serif' }}>
          <NavLink className="nav-link navbar-item" to="/">
            Digital Market
          </NavLink>
        </li>
        <NavLinkComponent path="/ordersPage" title="Orders" />
        {(role !== usersRoleEnum.ADMIN) 
          ? null
          : (<ul>
              <NavLinkComponent path="/adminPanel" title="Admin Panel" />
              <NavLinkComponent path="/addProduct" title="Add Goods" />
            </ul>)
        }
      </ul>
      <ul style={style.rightPartNavBar}>
        <MiniAvatar image={imagePath} />
        <NavLinkComponent path="/profilePage" title={name}/>
        <LogOut />
        <Basket />
      </ul>
    </>
  );
}

export default NavigationForLogInUsers;

