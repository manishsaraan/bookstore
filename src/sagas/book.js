import { put, takeEvery } from 'redux-saga/effects';
import { TEST, SEND_TEST } from "../actions/book";

export function* getBooks() {
    yield call(getRequest, { url: 'search/index.xml?q=rich'}, (data) => {
        console.log('--------',data)
    });
   
    yield put({ type: SEND_TEST});
}

export function* bookSaga() {
    yield takeEvery(TEST, getBooks);
}