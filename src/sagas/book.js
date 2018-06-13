import { delay } from 'redux-saga';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    SEARCH_BOOKS,
    LOAD_MORE_BOOKS,
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

export function* loadMoreBooksSaga({ payload }) {
    console.log(payload);
}
export function* bookSaga() {
    yield all[
        takeEvery(SEARCH_BOOKS, getBooks),
        takeLatest(LOAD_MORE_BOOKS, loadMoreBooksSaga)
    ];
}