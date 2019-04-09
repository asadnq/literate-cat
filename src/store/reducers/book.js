import { GET_BOOKS, GET_BOOK, IS_LOADING } from '../actions/types'

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
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload.books,
                isLoading: false
            }
        case GET_BOOK:
            return {
                ...state,
                book: action.payload.book,
                isLoading: false
            }
        default:
            return state
    }
}


export default books;