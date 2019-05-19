import { GET_BOOKS, GET_BOOK, GET_MORE_BOOKS } from './types';
import { API_URL } from '../../config/api.config';
import instance from './axios.config';

export const getBooks = () => {
  return {
    type: GET_BOOKS,
    payload: instance.get('/books')
  };
};

export const getBook = id => {
  return {
    type: GET_BOOK,
    payload: instance.get('/books/' + id)
  };
};

export const searchBook = (page, limit, val) => {
  return {
    type: GET_BOOKS,
    payload: instance.get(`/books?page=${page}&limit=${limit}&name=${val}`)
  };
};

export const getMoreSearch = (page, limit, val) => {
  return {
    type: GET_MORE_BOOKS,
    payload: instance.get(`/books?page=${page}&limit=${limit}&name=${val}`)
  };
};

export const getMoreBooks = (page, limit) => {
  return {
    type: GET_MORE_BOOKS,
    payload: instance.get(`/books?page=${page}&limit=${limit}`)
  };
};
