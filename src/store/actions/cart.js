import { ADD_TO_CART, DELETE_CART } from './types';

export function addToCart(cart, quantity) {
    
    const priceSum = cart.price * parseInt(quantity);
    
    return {
        type: ADD_TO_CART,
        payload: {
            id: Math.random().toString(),
            product_id: cart.product_id,
            name: cart.name,
            price: cart.price,
            image: cart.image,
            quantity: quantity,
            priceSum
        }
    }
}

export function deleteCart(cart) {
    return {
        type: DELETE_CART,
        payload: {
            id: cart.id,
            substract: cart.priceSum
        }
    }
}