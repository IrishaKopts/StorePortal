import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { AppStateModel } from '../store/types';

export namespace AppActions {
  export enum Type {
    FAKE_ACTION = 'FAKE_ACTION'
  }

  export const tempAction = createAction<PartialPick<AppStateModel, 'user'>>(Type.FAKE_ACTION);
}

export type AppActions = Omit<typeof AppActions, 'Type'>;

export const actions = (dispatch: Dispatch) => {
  const { Type, ...actions } = AppActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as AppActions;
};
