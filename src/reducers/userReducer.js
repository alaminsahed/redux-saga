import { GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED } from '../constant/const';

// const initialState = {
//     users: [],
// }

// export default function users(state = initialState, action) {
//     console.log(type.GET_USERS);
//     switch (action.type) {
//         case type.GET_USERS:
//             return {
//                 ...state,
//                 users: action.payload
//             }
//         default:
//             return state
//     }
// }

const initialState = {
    users: [],
    loading: false,
    error: null,
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            }
        case GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}