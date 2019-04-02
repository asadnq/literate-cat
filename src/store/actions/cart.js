import { ADD_TO_CART, DELETE_CART } from './types';

export function addToCart(cart) {
    return {
        type: ADD_TO_CART,
        payload: {
            id: Math.random().toString(),
            product_id: cart.product_id,
            name: cart.name,
            price: cart.price,
            image: cart.image
        }
    }
}

export function deleteCart(id) {
    return {
        type: DELETE_CART,
        id
    }
}