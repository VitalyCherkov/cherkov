// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

const LAYOUT_BACKGROUND_ID = 'LAYOUT_BACKGROUND_ID';

type Props = {
  children?: React.Node
};

const LayoutBackgroundPortal = ({ children }: Props) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById(LAYOUT_BACKGROUND_ID)
  );
};

export default LayoutBackgroundPortal;
