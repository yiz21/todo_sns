import { logOut } from '../requests/api'

const Profile = () => {
  return (
    <div>
      プロフィール
      <button onClick={() => logOut()}>/api/v1/posts (認証なし)</button>
    </div>
  );
};

export default Profile;