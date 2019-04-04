import { ADD_COURIER } from './types';

export const addCourier = (cart, courier, subTotal) => {
    return {
        type: ADD_COURIER,
        payload: {
            cart,
            courier,
            subTotal
        }
    }
}