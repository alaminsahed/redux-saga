import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../actions/userAction';

const NameList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <div>
            {users.loading && <p>Loading...</p>}
            {users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
            {users.length > 0 && users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    );
};

export default NameList;