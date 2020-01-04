// @flow

import * as React from 'react';
import './Layout.scss';
import Sidebar from './components/Sidebar';

type Props = {
  children?: React.Node
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="layout">
        <div className="layout__sidebar">
          <Sidebar />
        </div>
        <div className="layout__content">{children}</div>
      </div>
    </>
  );
};

export default Layout;
