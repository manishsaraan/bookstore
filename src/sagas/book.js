import { call, put, takeEvery } from 'redux-saga/effects';
import { 
    SEARCH_BOOKS,
    searchBooksSuccess,
    searchBooksRequested,
} from "../actions/book";
import getRequest from '../utils/http-helper';

export function* getBooks(query) {

    //showing the loader
    yield put(searchBooksRequested());

    const { GoodreadsResponse } = yield call(getRequest, { url: `search/index.xml?q=${query}` });
    //const { search: { result: { work: finalResponse } } } = GoodreadsResponse;
    console.log('-------searchBooksSuccess', GoodreadsResponse);


}

export function* bookSaga() {
    yield takeEvery(SEARCH_BOOKS, getBooks);
}