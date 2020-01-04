// @flow

import type { NavItemType } from 'shared/config/navigation';
import { navItemTypes } from 'shared/config/navigation';

const routes = {
  PAGE: {
    mask: '/:nav_type/',
    create: (navType: NavItemType) => `/${navType}/`
  }
};

export const BASE_ROUTE = routes.PAGE.create(navItemTypes.whoAmI);

export default routes;
