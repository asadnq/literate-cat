import { GET_BOOKS, GET_BOOK, IS_LOADING} from './types';
import { API_URL } from '../../config/api.config';
import axios from 'axios'

export const getBooks = () => (dispatch) => {

    dispatch({type: IS_LOADING });
    
    axios.get(`${API_URL}/books`)
        .then(res => {
                dispatch( {
                    type: GET_BOOKS,
                    payload: {
                        books: res.data.data
                    }
                })
            });
}
export const getBook = id => (dispatch) => {
    
    dispatch({type: IS_LOADING });

    axios.get(`${API_URL}/books/${id}`)
        .then(res => {
            dispatch({
                type: GET_BOOK,
                payload: {
                    book: res.data.data
                }
            })
        })
}