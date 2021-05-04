import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { configureStore } from './store';
import theme from './theme'
import './shared/defaultStyles.css'

const history = createBrowserHistory();
const store = configureStore();

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </ThemeProvider>
);

export default App;
