import  { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import saga from '../sagas';

const init = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    //run sagas
    sagaMiddleware.run(saga);

    return store;
};

export default init;