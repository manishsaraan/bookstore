import { put, takeEvery } from 'redux-saga/effects';
import { TEST, SEND_TEST } from "../actions/book";

export function* getBooks() {
    yield put({ type: SEND_TEST});
}

export function* bookSaga() {
    yield takeEvery(TEST, getBooks);
}