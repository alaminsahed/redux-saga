import { PRACTICAL_CLASS_ADD, PRACTICAL_CLASS_CANCEL } from '../constan/con'


export const getIncrease = () => {
    return {
        type: PRACTICAL_CLASS_ADD,
        payload: 1,
    }
}

export const getDecrease = () => {
    return {
        type: PRACTICAL_CLASS_CANCEL,
    }
}

