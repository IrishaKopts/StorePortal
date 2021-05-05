import { handleActions } from 'redux-actions';
import { AppActions } from '../actions';
import { AppStateModel } from '../store/types';
import { RootState } from './index';

const initialState: RootState.AppState = {
  user: null,
  authenticationError: '',
  userLoaded: true
};

export const appReducer = handleActions<RootState.AppState, AppStateModel>(
  {
    [AppActions.Type.FAKE_ACTION]: (state, action) => {
      return state;
    }
  },
  initialState
);
