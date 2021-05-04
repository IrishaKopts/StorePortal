import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { AppActions } from '../actions';
import { AppModel } from 'models';

const initialState: RootState.AppState = {
  user: null,
  authenticationError: '',
  userLoaded: true
};

export const appReducer = handleActions<RootState.AppState, AppModel>(
  {
    [AppActions.Type.FAKE_ACTION]: (state, action) => {
      return state;
    }
  },
  initialState
);
