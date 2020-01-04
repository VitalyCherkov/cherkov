// @flow

import { observer } from 'mobx-react';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Redirect, Route, Switch } from 'react-router';
import Layout from 'components/Layout';
import navigation from 'shared/config/navigation';
import routes, { BASE_ROUTE } from 'shared/config/routes';
import WhoAmI from './pages/WhoAmI';
import './App.modules.scss';

const App = observer(() => {
  return (
    <Layout>
      <Switch>
        {navigation.order.map(item => (
          <Route key={item} path={routes.PAGE.mask} component={WhoAmI} />
        ))}
        <Redirect to={BASE_ROUTE} />
      </Switch>
    </Layout>
  );
});

export default hot(App);
