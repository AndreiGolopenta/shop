import { Action } from '@ngrx/store';
import { UserLogInResponse } from 'src/app/models/user.interface';

export const USER_LOGIN = '[user-account] User Login';
export const USER_LOGOUT = '[app] User Logout';

export class UserLogin implements Action {
  readonly type = USER_LOGIN;
  constructor(public payload: UserLogInResponse) {}
}

export class UserLogOut implements Action {
  readonly type = USER_LOGOUT;
}

export type UserActions = UserLogin | UserLogOut;
