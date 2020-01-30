import { Action } from '@ngrx/store';
import { UserLogInResponse } from 'src/app/models/user.interface';

export const USER_LOGIN = '[user-account] User Login';
export const USER_LOGOUT = '[app] User Logout';
export const USER_UPDATE_NAME = '[user-account] User Update Name';

export class UserLogin implements Action {
  readonly type = USER_LOGIN;
  constructor(public payload: UserLogInResponse) {}
}

export class UserLogOut implements Action {
  readonly type = USER_LOGOUT;
}

export class UserUpdateName implements Action {
  readonly type = USER_UPDATE_NAME;
  constructor(public payload: string) {}
}

export type UserActions = UserLogin | UserLogOut | UserUpdateName;
