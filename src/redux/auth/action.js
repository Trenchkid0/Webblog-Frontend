import { USER_LOGIN, USER_LOGOUT } from './constant';

export function userLogin(token, role, firstName) {
  return {
    type: USER_LOGIN,
    token,
    role,
    firstName,
  };
}

export function userLogout() {
  localStorage.removeItem('auth');
  return {
    type: USER_LOGOUT,
  };
}
