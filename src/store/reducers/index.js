import { combineReducers } from 'redux';

import books from './book';
import cart from './cart';
import courier from './courier';
import checkout from './checkout';
import user from './user';
import genre from './genre';

const rootReducer = combineReducers({
    books,
    cart,
    courier,
    checkout,
    user,
    genre
});

export default rootReducer;