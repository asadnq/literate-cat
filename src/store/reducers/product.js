import { combineReducers } from 'redux';
import blink from '../../../assets/dummy/blink.jpg';
import tipping from '../../../assets/dummy/the_tipping_point.jpg';
import outliers from '../../../assets/dummy/outliers.jpg';
import wtds from '../../../assets/dummy/what_the_dog_saw.jpg';
import dng from '../../../assets/dummy/david_and_goliath.jpg';

const initialState = {
    products: [
        {
            name: 'The Tipping Point',
            price: 'Rp. 131.000',
            image: tipping
        },
        {
            name: 'Blink',
            price: 'Rp. 120.000',
            image: blink
        },
        {
            name: 'Outliers',
            price: 'Rp. 125.000',
            image: outliers
        },
        {
            name: 'What The Dog Saw',
            price: 'Rp. 145.000',
            image: wtds
        },
        {
            name: 'David and Goliath',
            price: 'Rp. 122.000',
            image: dng
        }
    ]
};

function products( state = initialState, action ) {
    switch(action.type) {
        default:
            return state
    }
}

const productsReducer = combineReducers({
    products
})

export default productsReducer;