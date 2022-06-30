import { createStore, combineReducers, applyMiddleware } from 'redux';
import practicalReducer from '../reducers/practicalReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import users from '../reducers/userReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga/sagaRoot';

const reducer = combineReducers({
    practical: practicalReducer,
    users: users,

})

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

console.log("store", store.getState());

sagaMiddleware.run(rootSaga);


export default store;