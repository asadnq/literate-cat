import { LOGIN, REGISTER } from "./types";

import instance from './axios.config.js';
import NavigationService from '../../navigations/NavigationService'

export const login = user => dispatch => {

  return {
    type: LOGIN,
    payload: instance.post('/auth/login', user)
          .then(res => {
                dispatch({
                  type: 'LOGIN_FULFILLED',
                  payload: res
                });
                NavigationService.navigate('Books')
              })
              .catch(err => {
                dispatch({
                  type: 'LOGIN_REJECTED'
                });
              })
  }
};

export const register = user => {
  return {
    type: REGISTER,
    payload: instance.post('/auth/register', user)
  }
  
  // axios.post(`${API_URL}/users/register`, user).then(res => {
  //   dispatch({
  //     type: REGISTER_SUCCESS,
  //     payload: res.data
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // });
};

// export const loadUser = () => (dispatch, getState) => {
//   axios
//     .get(`${API_URL}/user`, tokenConfig(getState))
//     .then(res => {
//       dispatch({
//         type: USER_LOADED,
//         payload: res.data.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: AUTH_ERROR
//       });
//     });
// };

export const tokenConfig = getState => {
  //get token from previous state
  const token = getState().user.access_token.token;

  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `bearer ${token}`;
  }
  console.log(config);
  return config;
};
