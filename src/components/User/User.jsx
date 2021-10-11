import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  //Hooks
  // -- state
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // --- params
  const { id } = useParams();

  // --- side effects
  useEffect(() => {
    console.log('USER---  Running useEffect | mounting + updating');

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
        //

        nameLiRef.current?.addEventListener('click', makeTextBigger);
        console.log(nameLiRef);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });

    return () => {
      console.log('USER----  Running useEffect | unmounting');

      setUser({});
      setIsLoading(true);
      setError('');
    };
  }, [id]);
  //
  // useEffect(() => {
  //   console.log('Running useEffect');
  //   const fetchUser = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await axios.get(
  //         `https://jsonplaceholder.typicode.com/users/${id}`
  //       );
  //       setUser(response.data);
  //       setIsLoading(false);
  //       nameLiRef.current.addEventListener('click', makeTextBigger);
  //     } catch (error) {
  //       console.error(error.response.data);
  //     }
  //   };
  //   fetchUser();
  //   const clean = nameLiRef.current;
  //   return () => {
  //     console.log('Unmounting');
  //     setUser({});
  //     clean.removeEventListener('click', makeTextBigger);
  //   };
  // }, [id]);
  // --- refs

  // custom functions
  const makeTextBigger = (e) => (e.target.style.fontSize = '2em');
  const nameLiRef = useRef();
  nameLiRef.current?.removeEventListener('click', makeTextBigger);
  //
  console.log('USER-  All component logic');

  return isLoading ? (
    <p>Loading..</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <>
      <ul>
        <li ref={nameLiRef}>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
        <li>{user.address.street}</li>
      </ul>
      {console.log('USER--  Return statement')}
    </>
  );
};
export default User;
