import { connect } from 'react-redux';

import { addToCart, addedToCart, hideModal } from '../../store/actions/cart';
import BooksDetail from './BooksDetail.screen'

const mapState = state => {
  const { book, isLoading } = state.books;
  const { isAddLoading, isAddedToCart } = state.cart;
  const { isLoggedIn } = state.user;

  return {
    book,
    isLoading,
    isAddLoading,
    isAddedToCart,
    isLoggedIn
  };
};

const mapDispatch = dispatch => {
  return {
    addToCart: (item, qty) => dispatch(addToCart(item, qty)),
    addedToCart: () => dispatch(addedToCart()),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapState,
  mapDispatch
)(BooksDetail);