import { ADD_TO_CART, DELETE_CART, ADD_QUANTITY, SUB_QUANTITY, GET_CARTS, CART_LOADED, CART_LOADING,
            IS_ADD_LOADING, IS_DELETE_LOADING } from './types';
import { API_URL } from '../config';
import axios from 'axios';

export const getCarts = () => dispatch => {
    dispatch({type: CART_LOADING});

    axios.get(`${API_URL}/carts`)
        .then(res => {
            dispatch({
                type: GET_CARTS,
                payload: {
                    data: res.data.data,
                    total: res.data.total
                }
            });
        });
}

export const addToCart = (book, quantity) => (dispatch) => {
    
    const price_sum = book.price * parseInt(quantity);
        dispatch({type: IS_ADD_LOADING});

    axios.post(`${API_URL}/carts`, { book_id: book.id, quantity: parseInt(quantity), price_sum})
    .then(res=> {
            dispatch({
                type: ADD_TO_CART,
                payload: {
                        cart: res.data.cart,
                        quantity,
                        price_sum
                }
            });
    })
}

export const deleteCart = (cart) => dispatch => {
    dispatch({type: IS_DELETE_LOADING});

    axios.delete(`${API_URL}/carts/${cart.id}`)
        .then(res => {
            dispatch({
                type: DELETE_CART,
                payload: {  
                    id: cart.id,
                    substract: cart.price_sum
                }
            })
        });
}

export const addQuantity = (cart) => {
    addedQuantity = parseInt(cart.quantity) + 1
    return {
        type: ADD_QUANTITY,
        payload: {
            id: cart.id,
            quantity: addedQuantity.toString(),
            price: cart.price,
            price_sum: cart.price * addedQuantity
        }
    }
}

export const subQuantity = cart => {
    subedQuantity = parseInt(cart.quantity) - 1
    return {
        type: SUB_QUANTITY,
        payload: {
            id: cart.id,
            quantity: subedQuantity.toString(),
            price: cart.price,
            price_sum: cart.price * subedQuantity
        }
    }
} 