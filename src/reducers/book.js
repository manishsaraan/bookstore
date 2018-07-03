import {
    SEARCH_BOOKS_SUCCESS,
    SEARCH_BOOKS_REQUESTED,
    SEARCH_BOOKS_FAILURE
 } from '../actions/book';

//set initial state
const initialState = {
    books: [],
    errors: {},
    isLoading: false
};

const books = (state = initialState, { type, payload }) =>  {
    console.log(payload,'payload');
    switch (type) {
        case SEARCH_BOOKS_REQUESTED:
          return { ...state,isLoading: true }
        case SEARCH_BOOKS_SUCCESS:
            return { ...state, books: { ...payload }};
        case SEARCH_BOOKS_FAILURE:
            return { ...state, errors: { ...payload } }
        default:
          return { ...state };
    }
}

export default books;