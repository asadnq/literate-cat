import { ADD_TO_CART, DELETE_CART, ADD_QUANTITY, SUB_QUANTITY, GET_CARTS,
        CART_LOADED, CART_LOADING, IS_ITEM_DELETED,
        IS_ADD_LOADING, IS_DELETE_LOADING, ADDED_TO_CART } from './types';
import { API_URL } from '../../config/api.config';
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
                    type: ADD_TO_CART,
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
    dispatch({
        type: ADDED_TO_CART
    });
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
            });
        });
}

export const itemDeleted = cart => dispatch => {
    dispatch({
        type: IS_ITEM_DELETED
    });
}

export const updateCarts = carts => dispatch => {
    carts.map(cart => {
        axios.patch(`${API_URL}/carts/${cart.id}`, cart)
        }
    );

}

export const addQuantity = (cart) => {
    addedQuantity = parseInt(cart.quantity) + 1;
    
    return {
        type: ADD_QUANTITY,
        payload: {
            id: cart.id,
            quantity: addedQuantity.toString(),
            price: cart.price,
            price_sum: cart.price * addedQuantity
        }
    };
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
    };
} 