import { connect } from "react-redux";

import {
  deleteCart,
  addQuantity,
  subQuantity,
  getCarts,
  updateCarts,
  itemDeleted
} from "../../store/actions/cart";
import CartScreen from './Cart.screen';


const mapState = state => {
  return {
    carts: state.cart.carts,
    total: state.cart.total,
    isLoading: state.cart.isLoading,
    isDeleteLoading: state.cart.isDeleteLoading,
    isItemDeleted: state.cart.isItemDeleted,
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatch = dispatch => {
  return {
    deleteCart: cart => dispatch(deleteCart(cart)),
    addQty: cart => dispatch(addQuantity(cart)),
    subQty: cart => dispatch(subQuantity(cart)),
    getCarts: () => dispatch(getCarts()),
    updateCarts: carts => dispatch(updateCarts(carts)),
    itemDeleted: () => dispatch(itemDeleted())
  };
};

export default connect(
  mapState,
  mapDispatch
)(CartScreen);