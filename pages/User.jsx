import React, { useEffect, useState, useContext } from 'react';
import useUser from '../data/useUser';
import Profile from '../components/Profile';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { Navigation } from '../data/navigation';

const User = () => {
  const { loading, loggedIn, user } = useUser();
  const [signUp, setSignUp] = useState(false);
  const nav = useContext(Navigation);

  useEffect(() => {
    nav.changeNav(2);
  }, []);

  const pushSignUp = () => {setSignUp(true)};
  const pushSignIn = () => {setSignUp(false)};

  return (
    <>
      {loading && <div>loading</div>}
      {!loading && loggedIn && <Profile/>}
      {!loading && !loggedIn && !signUp && <Signin pushSignUp={pushSignUp}/>}
      {!loading && !loggedIn && signUp && <Signup pushSignIn={pushSignIn}/>}

    </>
  );
};

export default User;