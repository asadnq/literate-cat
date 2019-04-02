import { ADD_TO_CART, DELETE_CART } from "../actions/types";


const initialState = {
    cart:[]
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => {
                    return item.id !== action.id })
            }
        
        default:
            return state

    }
}


export default cart;