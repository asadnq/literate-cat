import { GET_BOOKS, GET_BOOK, IS_LOADING} from './types';
import { API_URL } from '../../config/api.config';
import instance from './axios.config';

export const getBooks = () => {
    return {
        type: GET_BOOKS,
        payload: instance.get('/books')
    }
}

export const getBook = id => {
    return {
        type: GET_BOOK,
        payload: instance.get('/books/'+id)
    }
}

export const searchBook = val => {
    return {
      type: GET_BOOKS,
      payload: instance.get('/books/name/'+val)
    }
}
