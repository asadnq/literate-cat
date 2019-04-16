import axios from 'axios';

import { LOGIN_SUCCESS, REGISTER_SUCCESS } from './types';
import { API_URL } from '../../config/api.config';

export const login = user => dispatch => {
  axios.post(`${API_URL}/user/login`, user)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
}

export const register = user => dispatch => {
  axios.post(`${API_URL}/user/register`, user)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
}
