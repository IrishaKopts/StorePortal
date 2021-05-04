import React from 'react';
import { Route, Switch } from 'react-router';
import { AppRouts } from './shared/route-config';
import { UnauthorizedRoute } from './shared/components/routes/UnauthorizedRoute';
import { ProtectedRoute } from './shared/components/routes/ProtectedRoute';
import { hot } from 'react-hot-loader';
import { LoginPage } from './shared/components/loginPage';
import { HomePage } from './shared/components/homePage';
import { NotFoundPage } from './shared/components/notFoundPage';
import { WelcomePage } from './shared/components/welcomePage';

export const App = hot(module)(() => (
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
));
