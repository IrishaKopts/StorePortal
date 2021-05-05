import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Layout from 'shared/components/layout';
import HomePage from 'containers/homePage';
import LoginPage from 'containers/loginPage';
import { UnauthorizedRoute } from '../shared/components/routes/UnauthorizedRoute';
import { ProtectedRoute } from '../shared/components/routes/ProtectedRoute';
import { AppRouts } from '../shared/route-config';
import { WelcomePage } from '../containers/welcomePage';
import { NotFoundPage } from '../containers/notFoundPage';

export const Routes = hot(module)(
  (): JSX.Element => (
    <Layout>
      <Switch>
        <UnauthorizedRoute
          exact
          path={AppRouts.WELCOME}
          component={WelcomePage}
        />
        <UnauthorizedRoute exact path={AppRouts.LOGIN} component={LoginPage} />
        <ProtectedRoute exact path={AppRouts.HOME} component={HomePage} />
        <Route path={AppRouts.NOT_FOUND} component={NotFoundPage} />
      </Switch>
    </Layout>
  )
);
