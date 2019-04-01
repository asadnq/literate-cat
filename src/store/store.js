import { createStore } from 'redux';
import productsReducer from './reducers/product';

const store = createStore(productsReducer);

export default store;