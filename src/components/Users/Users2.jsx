import React, { useEffect, useState } from 'react';


const Users = () => {
  //Hooks
  // -- state
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState('John');
  // --- side effects
  useEffect(() => {
    // mounting + updating
    console.log('Running useEffect | mounting + updating');
    console.log(name);
    //unmounting
    return () => console.log('Running useEffect | unmounting');
  }, [name]);
  //

  console.log('All component logic');
  return (
    <>
      <div>
        <h2>Users, {name}</h2>
        {console.log('Return statement')}
        <button onClick={() => setClicked(!clicked)}>Change clicked</button>
        <button onClick={() => setName('Alex')}>Change name</button>
        {clicked && <p>Clicked</p>}
        <hr />
      </div>
    </>
  );
};

export default Users;
