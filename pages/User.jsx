import { useState } from 'react';
import useUser from '../data/useUser';
import Profile from '../components/Profile';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const User = () => {
  const { loading, loggedIn, user } = useUser();
  const [signUp, setSignUp] = useState(false);
  // console.log(`loading => ${loading}`);
  // console.log(`loggedIn => ${loggedIn}`);
  // console.log(`user => ${user}`);

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