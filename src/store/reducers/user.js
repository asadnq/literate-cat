import {
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
  BOOTSTRAP_ASYNC_FULFILLED,
  LOGOUT_FULFILLED
} from '../actions/types';

const initialState = {
  user: {},
  access_token: {},
  isLoggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FULFILLED:
    case LOGIN_FULFILLED:
      alert('login fulfilled');
      console.log(action.payload);
      return {
        ...state,
        user: action.payload.data.user,
        access_token: action.payload.data.access_token,
        isLoggedIn: true
      };
    case REGISTER_REJECTED:
    case LOGIN_REJECTED:
      alert('rejected');
      console.log(action.payload);
      return {
        ...state,
        isLoggedIn: false
      };
    case BOOTSTRAP_ASYNC_FULFILLED:
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        isLoggedIn: true
      };
    case LOGOUT_FULFILLED:
      return {
        ...state,
        user: {},
        access_token: {},
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default user;
