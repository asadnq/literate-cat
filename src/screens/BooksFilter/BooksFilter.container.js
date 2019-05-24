import React from 'react';
import { connect } from 'react-redux';
import { filterBooks } from '../../store/actions/book'

import BooksFilter from './BooksFilter.screen';

const mapState = state => {
  return {
    genres: state.genre.genres
  };
};

export default connect(
  mapState,
  { filterBooks }
)(BooksFilter);
