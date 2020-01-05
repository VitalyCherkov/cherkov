// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

const LAYOUT_BACKGROUND_ID = 'LAYOUT_BACKGROUND_ID';

type Props = {
  children?: React.Node
};

const LayoutBackgroundPortal = ({ children }: Props) => {
  const container = document.getElementById(LAYOUT_BACKGROUND_ID);
  return container ? ReactDOM.createPortal(children || null, container) : null;
};

export default LayoutBackgroundPortal;
