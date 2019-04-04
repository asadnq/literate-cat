import { ADD_TO_CART, DELETE_CART, ADD_QUANTITY, SUB_QUANTITY } from './types';

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
            quantity,
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

export const addQuantity = (cart) => {
    addedQuantity = parseInt(cart.quantity) + 1
    return {
        type: ADD_QUANTITY,
        payload: {
            id: cart.id,
            quantity: addedQuantity.toString(),
            price: cart.price,
            priceSum: cart.price * addedQuantity
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
            priceSum: cart.price * subedQuantity
        }
    }
} 