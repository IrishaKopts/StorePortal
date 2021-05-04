import { User } from '../shared/types';

export interface AppModel {
  user: User | null;
  authenticationError: string;
  userLoaded: boolean;
}
