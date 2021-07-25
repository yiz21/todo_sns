import { useContext } from 'react'
import { Navigation } from '../data/navigation'

const Home = () => {
  const nav = useContext(Navigation);
  return (
    <div>
      <button onClick={() => sharedData.changeValue(1)}>/api/v1/posts (認証なし)</button>
    </div>
  );
};

export default Home;