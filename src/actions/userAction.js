import * as type from '../constant/const';

// export function getUsers(users) {
//     return {
//         type: type.GET_USERS,
//         payload: users,
//     }
// }

export function getUsers() {
    return {
        type: type.GET_USERS_REQUESTED,
    }
}