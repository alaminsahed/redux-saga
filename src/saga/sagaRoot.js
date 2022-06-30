import { fetchUsers } from './handler/user';
import { takeEvery } from 'redux-saga/effects'


export function* rootSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}
