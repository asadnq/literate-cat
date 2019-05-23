import { connect } from "react-redux";
import { filterCities } from '../../store/actions/location';
import { getCosts } from '../../store/actions/courier'

import CheckoutScreen from './Checkout.screen'

const mapState = state => {
  return {
    carts: state.cart.carts,
    total: state.cart.total,
    costs: state.courier.costs,
    provinces: state.location.provinces ,
    cities: state.location.filteredCities
  };
};

export default connect(mapState, { filterCities, getCosts })(CheckoutScreen);