import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIncrease, getDecrease } from '../actions/action';

const Counter = () => {
    const dispatch = useDispatch();

    const increaseClass = () => {
        dispatch(getIncrease());
    }

    const decreaseClass = () => {
        dispatch(getDecrease());
    }
    const count = useSelector(state => state.practical.countOfPracticalClass);
    return (
        <div>
            <p>{count}</p>
            <button onClick={increaseClass}>+</button>
            <button onClick={decreaseClass}>-</button>
        </div>
    );
};

export default Counter;