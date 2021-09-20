import { logOut } from '../requests/api'
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();

  return (
    <div>
      プロフィール
      <button onClick={() => {logOut(); router.reload()}}>ログアウト</button>
    </div>
  );
};

export default Profile;