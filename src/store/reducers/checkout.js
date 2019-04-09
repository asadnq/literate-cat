import { ADD_COURIER } from '../actions/types';

const initialState = {
    courier: [
        {
            id: 1,
            name: 'JNE',
            charge: 11000
        },
        {
            id: 2,
            name: 'Tiki',
            charge: 12000
        },
        {
            id: 3,
            name: 'J&T',
            charge: 13000
        }
    ],
    checkout: {
        id: 1,
        cart: [],
        subTotal: 0,
        courier: {},
        total: 0
    }
}

const checkout = (state = initialState, action ) => {
    switch(action.type) {
        case GET_CHECKOUTS:
            return {
                ...state,
                checktout: {
                    cart: action.payload.cart
                }
            }

        case ADD_COURIER:
            return {
                checkout: {
                    id: Math.random().toString(),
                    cart: [...action.payload.cart],
                    subTotal: action.payload.subTotal,
                    courier: {...action.payload.courier},
                    total: 0
                }
            };
        default:
            return state;
    }
}