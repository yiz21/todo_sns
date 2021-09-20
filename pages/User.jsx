import React, { useEffect, useState, useContext } from 'react';
import useUser from '../data/useUser';
import Profile from '../components/Profile';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { Navigation } from '../data/navigation';
import BackDrop from '../components/BackDrop';
import { Snack } from '../data/snack';

const User = () => {
  const { loading, loggedIn, user } = useUser();
  const [signUp, setSignUp] = useState(false);
  const nav = useContext(Navigation);
  const snack = useContext(Snack);

  useEffect(() => {
    if (!loggedIn) snack.snackOn({ kind: 'error', message: 'ログインしてください' })
    nav.changeNav(2);
  }, []);

  const pushSignUp = () => {setSignUp(true)};
  const pushSignIn = () => {setSignUp(false)};

  return (
    <>
      {loading && <BackDrop enable={loading}/>}
      {!loading && loggedIn && <Profile/>}
      {!loading && !loggedIn && !signUp && <Signin pushSignUp={pushSignUp}/>}
      {!loading && !loggedIn && signUp && <Signup pushSignIn={pushSignIn}/>}

    </>
  );
};

export default User;