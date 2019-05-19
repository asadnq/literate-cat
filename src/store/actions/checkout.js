import { ADD_COURIER, GET_CHECKOUTS } from './types';
import axios from 'axios';
import { API_URL } from '../../config/api.config';

export const getCheckouts = () => dispatch => {
  axios.get(`${API_URL}/carts`).then(res => {
    dispatch({
      type: GET_CHECKOUTS,
      payload: {
        cart: res.data.data
      }
    });
  });
};

export const addCourier = (cart, courier, subTotal) => {
  return {
    type: ADD_COURIER,
    payload: {
      cart,
      courier,
      subTotal
    }
  };
};
