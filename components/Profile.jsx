import { logOut } from '../requests/api'

const Profile = () => {
  return (
    <div>
      プロフィール
      <button onClick={() => logOut()}>ログアウト</button>
    </div>
  );
};

export default Profile;