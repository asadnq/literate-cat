import {
  GET_CARTS,
  GET_CARTS_FULFILLED,
  GET_CARTS_PENDING,
  GET_CARTS_REJECTED,
  ADD_TO_CART_PENDING,
  ADD_TO_CART_FULFILLED,
  ADD_TO_CART_REJECTED,
  ADDED_TO_CART,
  DELETE_CART_PENDING,
  DELETE_CART_FULFILLED,
  DELETE_CART_REJECTED,
  CART_DELETED,
  SUB_QUANTITY,
  ADD_QUANTITY
} from '../actions/types';

const initialState = {
  carts: [],
  total: 0,
  isLoading: false,
  isAddLoading: false,
  isDeleteLoading: false,
  isAddedToCart: false,
  isItemDeleted: false
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_PENDING:
      return {
        ...state,
        isAddLoading: true
      };
    case ADD_TO_CART_FULFILLED:
      return {
        ...state,
        carts: state.carts.concat(action.payload.cart),
        total: state.total + action.payload.price_sum,
        isAddLoading: false
      };
    case DELETE_CART_PENDING:
      return {
        ...state,
        isDeleteLoading: true
      };
    case DELETE_CART_FULFILLED:
      return {
        ...state,
        carts: state.carts.filter(cart => {
          return cart.id !== action.payload.data.data.id;
        }),
        total: state.total - action.payload.data.data.price_sum,
        isLoading: false,
        isDeleteLoading: false
      };

    case GET_CARTS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_CARTS_FULFILLED:
      return {
        ...state,
        carts: action.payload.data.data.carts,
        total: action.payload.data.data.total,
        isLoading: false,
        isAddLoading: false
      };

    case ADDED_TO_CART:
      return {
        ...state,
        isAddedToCart: !state.isAddedToCart
      };

    case CART_DELETED:
      return {
        ...state,
        isItemDeleted: !state.isItemDeleted
      };
    case SUB_QUANTITY:
      return {
        ...state,
        carts: state.carts.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: action.payload.quantity,
                price_sum: action.payload.price_sum
              }
            : item
        ),
        total: state.total - action.payload.price,
        isAddLoading: false
      };
    case ADD_QUANTITY:
      return {
        ...state,
        carts: state.carts.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: action.payload.quantity,
                price_sum: action.payload.price_sum
              }
            : item
        ),
        total: state.total + action.payload.price,
        isAddLoading: false
      };
    default:
      return state;
  }
};

export default cart;
