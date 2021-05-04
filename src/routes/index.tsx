import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Layout from '../components/Layout';
import HomePage from '../pages/Home';

export const Routes = hot(module)(
  (): JSX.Element => (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Layout>
  )
);
