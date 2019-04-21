import { GET_BOOKS_PENDING, GET_BOOKS_FULFILLED, GET_BOOKS_REJECTED,
        GET_BOOK_PENDING, GET_BOOK_FULFILLED, GET_BOOK_REJECTED } from '../actions/types'

const initialState = {
    book: {
        id: 1,
        category_id: 1,
        name: "",
        price: "",
        cover_image: "",
    },
    books:[],
    isLoading: false
}

function books( state = initialState, action ) {

    switch(action.type) {
        case GET_BOOKS_PENDING:
        case GET_BOOK_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case GET_BOOKS_FULFILLED:
            return {
                ...state,
                books: action.payload.data.data,
                isLoading: false
            }
        case GET_BOOK_FULFILLED:
            return {
                ...state,
                book: action.payload.data.data,
                isLoading: false
            }
        default:
            return state
    }
}


export default books;