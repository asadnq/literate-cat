import { ADD_TO_CART, DELETE_CART, ADD_QUANTITY, SUB_QUANTITY } from "../actions/types";

const initialState = {
    cart:[],
    total: 0
}

const cart = (state = initialState, action) => {

    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload),
                total: state.total + action.payload.priceSum
            };
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => {
                    return item.id !== action.payload.id }),
                total: state.total - action.payload.substract
            };
        case SUB_QUANTITY:
                return {
                    cart: state.cart.map(item => item.id === action.payload.id ?
                        {...item, quantity: action.payload.quantity,
                            priceSum: action.payload.priceSum } :
                        item
                        ),
                    total: state.total - action.payload.price
                };
        case ADD_QUANTITY:
            return {
                cart: state.cart.map(item => item.id === action.payload.id ?
                    {...item,
                        quantity: action.payload.quantity,
                        priceSum: action.payload.priceSum
                    } :
                    item
                    ),
                total: state.total + action.payload.price
            };
        default:
            return state
    }
}


export default cart;