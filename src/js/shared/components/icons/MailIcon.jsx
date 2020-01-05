// @flow
import cn from 'classnames';
import * as React from 'react';
import './Icon.scss';

type Props = {
  className?: string
};

const MailIcon = ({ className }: Props) => (
  <svg
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 -90 512 512"
    className={cn('icon', className)}
  >
    <g id="surface1">
      <path
        d="M 0 0 L 0 332.496094 L 512 332.496094 L 512 0 Z M 453.566406 30 L 256 184.9375 L 58.433594 30 Z M 30 302.496094 L 30 45.824219 L 256 223.0625 L 482 45.824219 L 482 302.496094 Z M 30 302.496094 "
        stroke="none"
        fillRule="nonzero"
        fillOpacity="1"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default MailIcon;
