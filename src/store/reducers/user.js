import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED
} from "../actions/types";

const initialState = {
  user: {},
  access_token: {},
  isLoggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        isLoggedIn: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default user;
