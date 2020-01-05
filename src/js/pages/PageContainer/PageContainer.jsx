// @flow

import * as React from 'react';
import { Route, Switch } from 'react-router';
import { LayoutContent } from 'components/Layout';
import navigation from 'shared/config/navigation';
import type { NavItem } from 'shared/config/navigation';
import routes from 'shared/config/routes';
import AcademicExperience from './components/AcademicExperience';
import ProfessionalExperience from './components/ProfessionalExperience';
import WhoAmI from './components/WhoAmI';

const pageComponents = {
  [navigation.keys.whoAmI]: WhoAmI,
  [navigation.keys.professionalExperience]: ProfessionalExperience,
  [navigation.keys.academicExperience]: AcademicExperience
};

const PageContainer = () => {
  return (
    <LayoutContent>
      <Switch>
        {navigation.order.map(key => {
          const entity: NavItem = navigation.entities[key];
          return (
            <Route
              path={routes.PAGE.create(entity.key)}
              key={key}
              component={pageComponents[key]}
            />
          );
        })}
      </Switch>
    </LayoutContent>
  );
};

export default PageContainer;
