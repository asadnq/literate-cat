import { connect } from "react-redux";

import CheckoutScreen from './Checkout.screen'

const mapState = state => {
  return {
    carts: state.cart.carts,
    total: state.cart.total,
    couriers: state.courier.courier
  };
};

export default connect(mapState)(CheckoutScreen);