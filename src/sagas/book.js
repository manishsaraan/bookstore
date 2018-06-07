import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    SEARCH_BOOKS,
    searchBooksSuccess,
    searchBooksRequested,
} from "../actions/book";
import getRequest from '../utils/http-helper';

export function* getBooks({ payload: { search } }) {
    //showing the loader

    yield put(searchBooksRequested());
    yield delay(1000);

    const data = yield call(getRequest, { url: `q=${search}` });

    yield put(searchBooksSuccess(data));


}

export function* bookSaga() {
    yield takeEvery(SEARCH_BOOKS, getBooks);
}