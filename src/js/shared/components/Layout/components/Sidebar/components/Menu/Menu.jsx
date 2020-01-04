// @flow
import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';
import { matchPath } from 'react-router';
import { NavLink } from 'react-router-dom';
import navigation from 'shared/config/navigation';
import routes from 'shared/config/routes';
import { useLangStore } from 'store';
import './Menu.scss';

type Props = {
  className?: string
};

const Menu = observer(({ className }: Props) => {
  const langStore = useLangStore();

  return (
    <div className={cn('menu', className)}>
      {navigation.order.map(key => {
        const entity = navigation.entities[key];

        const matchTab = React.useCallback(
          (_, location: Location) =>
            !!matchPath(location.pathname, routes.PAGE.create(key))
        );

        return (
          <NavLink
            to={routes.PAGE.create(entity.key)}
            className="menu__item"
            activeClassName="menu__item_active"
            key={key}
            isActive={matchTab}
          >
            {langStore.getString(entity.labelKey)}
          </NavLink>
        );
      })}
    </div>
  );
});

export default Menu;
