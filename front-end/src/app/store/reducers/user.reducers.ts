import * as fromUser from '../actions/user.actions';

export interface UserState {
  token: string;
  userName: string;
}

export const initialState: UserState = {
  token: '',
  userName: ''
};

export function reducer(
  state: UserState = initialState,
  action: fromUser.UserActions
) {
  switch (action.type) {
    case fromUser.USER_LOGIN: {
      const { token, userName } = action.payload;
      return {
        ...state,
        token,
        userName
      };
    }

    case fromUser.USER_LOGOUT: {
      const token = '';
      const userName = '';
      return {
        ...state,
        token,
        userName
      };
    }

    case fromUser.USER_UPDATE_NAME: {
      const userName = action.payload;
      return {
        ...state,
        userName
      };
    }

    default: {
      return state;
    }
  }
}

export const getToken = (state: UserState) => state.token;
export const getUserName = (state: UserState) => state.userName;
