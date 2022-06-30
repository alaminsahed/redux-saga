import { call, put } from 'redux-saga/effects';
import { getApi } from "../request/user";

export function* fetchUsers(action) {
    try {
        const users = yield call(getApi);
        yield put({ type: 'GET_USERS_SUCCESS', users: users });
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }
}