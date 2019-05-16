import { connect } from "react-redux";

import CheckoutScreen from './Checkout.screen'

const mapState = state => {
  return {
    cart: state.cart.cart,
    total: state.cart.total,
    couriers: state.courier.courier
  };
};

export default connect(mapState)(CheckoutScreen);