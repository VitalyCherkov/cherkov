// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { BASE_ROUTE } from 'shared/config/routes';
import LanguagesToggle from './components/LanguagesToggle';
import Logo from './components/Logo';
import Menu from './components/Menu';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <svg
        className="sidebar__bg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 395 700"
        width="100%"
        height="100%"
      >
        <path d="M 395 0 h -395 v 700 h 80 Z" fill="currentColor" />
      </svg>
      <Link to={BASE_ROUTE} className="sidebar__logo">
        <Logo />
      </Link>
      <Menu className="sidebar__menu" />
      <LanguagesToggle className="sidebar__languages" />
    </div>
  );
};

export default Sidebar;
