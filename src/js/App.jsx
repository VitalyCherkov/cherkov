// @flow

import { observer } from 'mobx-react';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Redirect, Route, Switch } from 'react-router';
import Layout from 'components/Layout';
import routes, { BASE_ROUTE } from 'shared/config/routes';
import PageContainer from './pages/PageContainer';
import './App.modules.scss';

const App = observer(() => {
  return (
    <Layout>
      <Switch>
        <Route path={routes.PAGE.mask} component={PageContainer} />
        <Redirect to={BASE_ROUTE} />
      </Switch>
    </Layout>
  );
});

export default hot(App);
