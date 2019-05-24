const initialState = {
  costs: [],
  isLoading: false
};

const courier = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COSTS_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_COSTS_FULFILLED':
      return {
        ...state,
        costs: action.payload.data.data.rajaongkir.results[0].costs,
        isLoading: false
      };
    case 'GET_COSTS_REJECTED':
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default courier;
