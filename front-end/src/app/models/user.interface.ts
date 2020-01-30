export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  address: string;
  email?: string;
  password?: string;
}

export interface UserLogIn {
  email: string;
  password: string;
}

export interface UserLogInResponse {
  userName: string;
  token: string;
}
