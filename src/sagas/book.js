import { call, put, takeEvery } from 'redux-saga/effects';
import { 
    SEARCH_BOOKS,
    searchBooksSuccess,
    searchBooksRequested,
} from "../actions/book";
import getRequest from '../utils/http-helper';
import { getResponseInJson } from "../utils/data-helper";

export function* getBooks({ payload: { search } }) {
    //showing the loader
    yield put(searchBooksRequested());

    const { GoodreadsResponse } = yield call(getRequest, { url: `search/index.xml?q=${search}` });

    yield put(searchBooksSuccess(getResponseInJson(GoodreadsResponse)));


}

export function* bookSaga() {
    yield takeEvery(SEARCH_BOOKS, getBooks);
}