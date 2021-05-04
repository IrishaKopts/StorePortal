import { AppModel } from 'models';

export interface RootState {
  app: RootState.AppState;
  router?: any;
}

export namespace RootState {
  export type AppState = AppModel;
}
