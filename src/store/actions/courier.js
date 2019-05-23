import instance from './axios.config';

export const getCosts = checkout => dispatch => {
  body = {
    origin: '457',
    courier: checkout.courier || 'jne',
    weight: 478,
    destination: checkout.destination.toString()
  };
  return {
    type: 'GET_COSTS',
    payload: instance
      .post('/rajaongkir/cost', body)
      .then(res => {
        console.log('get costs', res)
        dispatch({ type: 'GET_COSTS_FULFILLED', payload: res });
      })
      .catch(err => {
        console.log('get costs error', err);
      })
  };
};
