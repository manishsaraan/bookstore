import { createAction } from 'redux-actions';

export const SEARCH_BOOKS_REQUESTED = 'SEARCH_BOOKS_REQUESTED';
export const searchBooksRequested = createAction(SEARCH_BOOKS_REQUESTED);

export const SEARCH_BOOKS_SUCCESS = 'SEARCH_BOOKS_SUCCESS';
export const searchBooksSuccess = createAction(SEARCH_BOOKS_SUCCESS);

export const SEARCH_BOOKS_FAILURE = 'SEARCH_BOOKS_FAILURE';
export const searchBooksFailure = createAction(SEARCH_BOOKS_FAILURE);

export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const searchBooks = createAction(SEARCH_BOOKS);
