import { GET_BOOKS, GET_BOOK, GET_MORE_BOOKS } from './types';

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

export const searchBook = (pagination, val) => {
  const { page, limit } = pagination;  
  return {
    type: GET_BOOKS,
    payload: instance.get(`/books?page=${page}&limit=${limit}&name=${val}`)
  };
};

export const getMoreSearch = (pagination, val) => {
  const { page, limit } = pagination;  
  return {
    type: GET_MORE_BOOKS,
    payload: instance.get(`/books?page=${page}&limit=${limit}&name=${val}`)
  };
};

export const getMoreBooks = pagination => {
  const { page, limit } = pagination;  
  return {
    type: GET_MORE_BOOKS,
    payload: instance.get(`/books?page=${page}&limit=${limit}`)
  };
};

export const getMoreFilteredBooks = (pagination, filter) => {
  const { page, limit } = pagination;
  const { genres, author} = filter;
  
  return {
    type: GET_MORE_BOOKS,
    payload: instance.get(`/books?page=${page}&limit=${limit}&genre=${genres}&author=${author}`)  
  }
}

export const filterBooks = filter => {
  const { genres, author } = filter;   
  return {
    type: GET_BOOKS,
    payload: instance.get(`/books?genre=${genres}&author=${author}`)  
  }
}