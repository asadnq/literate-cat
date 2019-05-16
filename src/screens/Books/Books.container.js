import Books from './Books.screen'
import { connect } from 'react-redux';

import { getBooks, getBook, searchBook } from '../../store/actions/book';
import { getGenres } from '../../store/actions/genre';

const mapState = state => {
  return {
    books: state.books.books,
    isLoading: state.books.isLoading,
    genres: state.genre.genres,
    isGenresLoading: state.genre.isLoading
  };
};

export default connect(
  mapState,
  { getBooks, getBook, searchBook, getGenres }
)(Books);