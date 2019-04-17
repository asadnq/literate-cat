import axios from 'axios';

import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAIL } from './types';
import { API_URL } from '../../config/api.config';

export const login = user => dispatch => {

  const { email, password } = user;

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({email, password});

  axios.post(`${API_URL}/users/login`, body, config)
    .then(res => {
      console.log(body);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      alert('catch')
      console.log('catch')
      dispatch({
        type: LOGIN_FAIL
      });
    });
}

export const register = user => dispatch => {
  axios.post(`${API_URL}/users/register`, user)
    .then(res => {
      alert('asdasd')
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
}