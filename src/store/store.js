import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import booksReducer from './reducers/book';
import cartReducer from './reducers/cart';
import courierReducer from './reducers/courier';

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer,
    courier: courierReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;