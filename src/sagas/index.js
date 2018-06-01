import { all } from 'redux-saga/effects';
import { bookSaga } from './book';

const sagas = function* sagas() {
    yield all([ bookSaga() ]);
};

export default sagas;