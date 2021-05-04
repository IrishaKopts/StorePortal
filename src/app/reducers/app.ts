import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { AppActions } from 'app/actions/actions';
import { AppModel } from 'app/models';

const initialState: RootState.AppState = [
  {
    text: ''
  }
];

export const appReducer = handleActions<RootState.AppState, AppModel>(
  {
    [AppActions.Type.FAKE_ACTION]: (state, action) => {
      return state;
    }
  },
  initialState
);
