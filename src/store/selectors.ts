import { createSelector } from 'reselect';
import { RootState } from '../reducers';

const selectUser = createSelector(
  (state: RootState) => state.app,
  appState => appState.user
);

const selectAuthenticationError = createSelector(
  (state: RootState) => state.app,
  appState => appState.authenticationError
);

const selectUserLoaded = createSelector(
  (state: RootState) => state.app,
  appState => appState.userLoaded
);

export {
  selectUser,
  selectAuthenticationError,
  selectUserLoaded
};
