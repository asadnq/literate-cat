import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/product';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})


const store = createStore(rootReducer);

export default store;