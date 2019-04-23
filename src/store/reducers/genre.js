import { GET_GENRES_FULFILLED, GET_GENRES_REJECTED, GET_GENRES_PENDING } from '../actions/types'

const initialState = {
    genres:[],
    isLoading: false 
}

const genre = (state = initialState, action) => {
    switch(action.type){
        case GET_GENRES_FULFILLED:
            return {
                genres: action.payload.data.data,
                isLoading: false
            }
        case GET_GENRES_PENDING:
            return {
                genres: [],
                isLoading: true
            }
        case GET_GENRES_REJECTED:
            return {
                genres: [],
                isLoading: false
            }
        default:
            return state
    }
}

export default genre;