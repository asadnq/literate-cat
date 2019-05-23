const initialState = {
  costs: []
};

const courier = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COSTS_FULFILLED':
      return {
        ...state,
        costs: action.payload.data.data.rajaongkir.results[0].costs
      };
    default:
      return state;
  }
};

export default courier;
