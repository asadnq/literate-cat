import instance from './axios.config';
import store from '../store'

export const getProvinces = () => {
  return {
    type: 'GET_PROVINCES',
    payload: instance.get('/rajaongkir/province')
  };
};

export const getCities = () => {
  return {
    type: 'GET_CITIES',
    payload: instance.get('/rajaongkir/city')
  }
}

export const filterCities = id => {
  const cities = store.getState().location.cities
  const filteredCities = cities.filter(city => city.province_id == id)
  return {
    type: 'FILTER_CITIES',
    payload: filteredCities
  }
}