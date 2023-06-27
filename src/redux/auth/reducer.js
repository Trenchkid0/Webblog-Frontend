import { USER_LOGIN, USER_LOGOUT } from './constant';

let initialState = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : { token: null, role: null, firstName: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        role: action.role,
        firstName: action.firstName,
      };

    case USER_LOGOUT:
      return { token: null, role: null, firstName: null};

    default:
      return state;
  }
}
