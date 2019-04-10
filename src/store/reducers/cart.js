import { ADD_TO_CART, DELETE_CART, ADD_QUANTITY,
            SUB_QUANTITY, GET_CARTS, IS_LOADING,
            CART_LOADED, CART_LOADING, IS_ADD_LOADING, IS_DELETE_LOADING,
            ADDED_TO_CART } from "../actions/types";

const initialState = {
    cart:[],
    total: 0,
    isLoading: false,
    isAddLoading: false,
    isDeleteLoading: false,
    isAddedToCart: false
}

const cart = (state = initialState, action) => {

    switch(action.type) {
        case CART_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case IS_ADD_LOADING:
            return {
                ...state,
                isAddLoading: true
            }
        case IS_DELETE_LOADING:
            return {
                ...state,
                isDeleteLoading: true
            }
        case GET_CARTS:
            return {
                ...state,
                cart: action.payload.data,
                total: action.payload.total,
                isLoading: false,
                isAddLoading: false
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload.cart),
                total: state.total + action.payload.price_sum,
                isAddLoading: false
            };
        case ADDED_TO_CART:
            return{
                ...state,
                isAddedToCart: !state.isAddedToCart
            }
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => {
                    return item.id !== action.payload.id }),
                total: state.total - action.payload.substract,
                isLoading: false,
                isDeleteLoading: false
            };
        case SUB_QUANTITY:
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload.id ?
                        {...item, quantity: action.payload.quantity,
                            price_sum: action.payload.price_sum } :
                        item
                        ),
                    total: state.total - action.payload.price
                };
        case ADD_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ?
                    {...item,
                        quantity: action.payload.quantity,
                        price_sum: action.payload.price_sum
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