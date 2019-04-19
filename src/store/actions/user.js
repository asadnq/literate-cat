import axios from "axios";

import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAIL } from "./types";
import { API_URL } from "../../config/api.config";

export const login = user => dispatch => {
  const { email, password } = user;

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  axios
    .post(`${API_URL}/users/login`, body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const register = user => dispatch => {
  axios.post(`${API_URL}/users/register`, user).then(res => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
    .catch(err => {
      console.log(err)
    })
  });
};

export const loadUser = () => (dispatch, getState) => {
  axios
    .get(`${API_URL}/user`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};

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
