import useUser from '../data/useUser'
import Profile from './Profile';
import Signin from './Signin';

const User = () => {
  const { loading, loggedIn, user } = useUser();
  console.log(`loading => ${loading}`);
  console.log(`loggedIn => ${loggedIn}`);
  console.log(`user => ${user}`);

  return (
    <>
      {loading && <div>loading</div>}
      {!loading && loggedIn && <Profile/>}
      {!loading && !loggedIn && <Signin/>}
    </>
  );
};

export default User;