import { ADD_TO_CART, DELETE_CART } from "../actions/types";


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
            }
        case DELETE_CART:
            return {
                ...state,
                total: state.total - action.payload.substract,
                cart: state.cart.filter(item => {
                    return item.id !== action.payload.id })
            }
        
        default:
            return state
    }
}


export default cart;