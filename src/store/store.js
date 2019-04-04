import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/product';
import cartReducer from './reducers/cart';
import courierReducer from './reducers/courier';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    courier: courierReducer
})


const store = createStore(rootReducer);

export default store;