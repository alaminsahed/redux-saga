//import { PRACTICAL_CLASS_ADD, PRACTICAL_CLASS_CANCEL } from '../constants/practicalConstant'

const initialState = {
    countOfPracticalClass: 0,
}

const practicalReducer = (state = initialState, action) => {
    console.log("action", action);
    switch (action.type) {
        case 'PRACTICAL_CLASS_ADD':
            return {
                ...state,
                countOfPracticalClass: state.countOfPracticalClass + 1,
            }
        case 'PRACTICAL_CLASS_CANCEL':
            return {
                ...state,
                countOfPracticalClass: state.countOfPracticalClass - 1,
            }

        default:
            return state
    }
}


export default practicalReducer;