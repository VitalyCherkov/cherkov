// @flow
import cn from 'classnames';
import React from 'react';
import type { PropsWithLang } from 'shared/config/languages';
import navigation from 'shared/config/navigation';
import './Menu.scss';

type Props = PropsWithLang & {
  className?: string
};

const Menu = ({ langManager, className }: Props) => {
  return (
    <div className={cn('menu', className)}>
      {navigation.order.map(key => (
        <div className="menu__item" key={key}>
          {langManager.getString(navigation.entities[key].labelKey)}
        </div>
      ))}
    </div>
  );
};

export default Menu;
