// @flow

import * as React from 'react';
import './Layout.scss';
import Sidebar from './components/Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <Sidebar />
      </div>
      <div className="layout__content">content</div>
    </div>
  );
};

export default Layout;
