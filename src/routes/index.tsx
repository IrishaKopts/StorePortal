import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Layout from 'components/Layout';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';

export const Routes = hot(module)(
  (): JSX.Element => (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Layout>
  )
);
