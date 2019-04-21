import { GET_CARTS, DELETE_CART, ADD_TO_CART_PENDING, ADD_QUANTITY, CART_DELETED, ADD_TO_CART_FULFILLED } from './types';
import { API_URL } from '../../config/api.config';
import { tokenConfig } from './user';

import axios from 'axios';
import instance from './axios.config';

export const getCarts = () => {
    return {
        type: GET_CARTS,
        payload: instance.get('/carts')
    }
}

export const addToCart = (book, quantity) => dispatch => {

    const price_sum = book.price * parseInt(quantity);
    dispatch({type: ADD_TO_CART_PENDING});

    const body = {
        book_id: book.id,
        quantity: parseInt(quantity),
        price_sum
    }

    instance.post(`/carts`, body)
    .then(res => {

            const { data } = res.data;

            if(res.data.message === 'Quantity added.') {
                dispatch({
                    type: ADD_QUANTITY,
                    payload: {
                        id: data.id,
                        quantity: data.quantity,
                        price_sum: data.price_sum
                    }
                });
            } else {
                dispatch({
                    type: ADD_TO_CART_FULFILLED,
                    payload: {
                            cart: res.data.data,
                            quantity,
                            price_sum
                    }
                });
            }
    });
}

export const addedToCart = () => dispatch => {
    /*dispatch({
        type: ADDED_TO_CART
    });*/
}

export const hideModal = () => dispatch => {
    /*dispatch({
        type: HIDE_MODAL
    });*/
}

export const deleteCart = cart => dispatch => {
    // axios.delete(`${API_URL}/carts/${cart.id}`, tokenConfig(getState))
    //     .then(res => {
    //         dispatch({
    //             type: DELETE_CART,
    //             payload: {
    //                 id: cart.id,
    //                 substract: cart.price_sum
    //             }
    //         });
    //     });
    return {
        type: DELETE_CART,
        payload: instance.delete('/carts/'+cart.id)
            .then(() => dispatch({type: CART_DELETED}))
    }
}

export const itemDeleted = () => {
    return {
        type: IS_ITEM_DELETED
    };
}

export const updateCarts = carts => (dispatch, getState) => {
    /*carts.map(cart => {
        axios.patch(`${API_URL}/carts/${cart.id}`, cart, tokenConfig(getState))
        }
    );*/
}

export const addQuantity = (cart) => {
    /*addedQuantity = parseInt(cart.quantity) + 1;

    return {
        type: ADD_QUANTITY,
        payload: {
            id: cart.id,
            quantity: addedQuantity.toString(),
            price: cart.price,
            price_sum: cart.price * addedQuantity
        }
    };*/
}

export const subQuantity = cart => {
    /*subedQuantity = parseInt(cart.quantity) - 1
    return {
        type: SUB_QUANTITY,
        payload: {
            id: cart.id,
            quantity: subedQuantity.toString(),
            price: cart.price,
            price_sum: cart.price * subedQuantity
        }
    };*/
}
