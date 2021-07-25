import useSWR from "swr";
import { getPosts } from '../requests/api'
const Home = () => {
  const { posts, error } = useSWR("getPosts", getPosts);
  console.log(posts)
  return (
    <div>
      <button onClick={() => sharedData.changeValue(1)}>/api/v1/posts (認証なし)</button>
    </div>
  );
};

export default Home;