import useSWR from "swr";
import { getPost } from '../requests/api'
const Browse = () => {
  const { post } = useSWR("get_post", getPost);
  console.log(post);

  return (
    <div>
      Browse Page
      { post && post.name }
    </div>

  );
};

export default Browse;