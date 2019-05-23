const initialState = {
    provinces: [],
    cities: [],
    filteredCities: []
}

const location = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PROVINCES_FULFILLED':
            return {
                ...state,
                provinces: action.payload.data.data.rajaongkir.results
            }
        case 'GET_CITIES_FULFILLED':
            return {
                ...state,
                cities: action.payload.data.data.rajaongkir.results
            }
        case 'FILTER_CITIES':
            return {
                ...state,
                filteredCities: action.payload
            }
        default:
            return state
    }
}

export default location