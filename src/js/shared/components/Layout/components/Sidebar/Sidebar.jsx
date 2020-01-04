// @flow

import React from 'react';
import languges, { langTypes } from 'shared/config/languages';
import Logo from './components/Logo';
import Menu from './components/Menu';
import './Sidebar.scss';
import LanguagesToggle from './components/LanguagesToggle';

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
      <Logo langManager={languges.manager} className="sidebar__logo" />
      <Menu langManager={languges.manager} className="sidebar__menu" />
      <LanguagesToggle
        langManager={languges.manager}
        className="sidebar__languages"
      />
    </div>
  );
};

export default Sidebar;
