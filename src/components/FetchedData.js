// FetchedData.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../redux/users/usersSlice';

const FetchedData = () => {
  const { users, isLoading } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Data Loaded</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>{`${user.name.first} ${user.name.last}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchedData;
