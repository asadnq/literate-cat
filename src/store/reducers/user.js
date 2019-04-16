import { LOGIN_SUCCESS } from '../actions/types';

const initialState = {
  user: {},
  access_token: {},
  isLoggedIn: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          access_token: action.payload.access_token,
          isLoggedIn: true
        }
    default:
      return state;
  }
}

export default
