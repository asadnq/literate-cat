import AsyncStorage from '@react-native-community/async-storage';

import { LOGIN, REGISTER, BOOTSTRAP_ASYNC_FULFILLED, LOGOUT } from './types';
import instance from './axios.config.js';
import NavigationService from '../../navigations/NavigationService';

const storeUserData = async data => {
  try {
    await AsyncStorage.setItem('userData', data);
    const test = await AsyncStorage.getItem('userData');
    console.log(JSON.parse(test));
  } catch (e) {
    console.log(e);
  }
};

export const bootstrapAsync = () => async dispatch => {
  try {
    const retrievedItem = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(retrievedItem);
    if (userData !== null) {
      NavigationService.navigate('Books');
      dispatch({
        type: BOOTSTRAP_ASYNC_FULFILLED,
        payload: userData
      });
    } else {
      NavigationService.navigate('Login');
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = user => dispatch => {
  return {
    type: LOGIN,
    payload: instance
      .post('/auth/login', user)
      .then(res => {
        dispatch({
          type: 'LOGIN_FULFILLED',
          payload: res
        });
        storeUserData(JSON.stringify(res.data));
        NavigationService.navigate('Books');
      })
      .catch(err => {
        dispatch({
          type: 'LOGIN_REJECTED'
        });
      })
  };
};

export const register = user => {
  return {
    type: REGISTER,
    payload: instance.post('/auth/register', user)
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: new Promise((resolve, reject) => {
      AsyncStorage.clear().then(() => {
        NavigationService.navigate('AuthLoading')
        resolve()
      });
    })
  };
};

export const tokenConfig = getState => {
  //get token from previous state
  const token = getState().user.access_token.token;

  //headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `bearer ${token}`;
  }
  console.log(config);
  return config;
};
