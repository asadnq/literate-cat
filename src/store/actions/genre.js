import { GET_GENRES } from './types';
import instance from './axios.config';

export const getGenres = () => {
    return {
        type: GET_GENRES,
        payload: instance.get('/genres')
    }
}
