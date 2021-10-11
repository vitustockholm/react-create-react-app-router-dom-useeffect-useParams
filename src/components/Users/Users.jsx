import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  //Hooks
  // -- state
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // --- side effects
  useEffect(() => {
    // mounting + updating
    console.log('USERS---  Running useEffect | mounting + updating');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
    //unmounting
    return () => {
      console.log('USERS----  Running useEffect | unmounting');
      setUsers([]);
      setIsLoading(true);
      setError('');
    };
  }, []);
  //

  console.log('USERS-  All component logic');
  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading..</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          users.map((user) => (
            <ul key={user.id}>
              <li>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            </ul>
          ))
        )}
        {console.log('USERS--  Return statement')}
      </div>
    </>
  );
};

export default Users;
