import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
  user: {},
  access_token: {},
  isLoggedIn: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      alert('login success');
        return {
          ...state,
          user: action.payload.user,
          access_token: action.payload.access_token,
          isLoggedIn: true
        }
    case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          access_token: action.payload.access_token,
          isLoggedIn: true
        }
    case LOGIN_FAIL:
      alert('login fail');
        return {
          ...state,
          isLoggedIn: false
        }
    default:
      return state;
  }
}

export default user;
