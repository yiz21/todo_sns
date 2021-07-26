import useSWR from "swr";
import { getPost } from '../requests/api'
const Browse = () => {
  const { post, error } = useSWR("getPosts", getPost);
  console.log(post)
  return (
    <div>aa</div>
  );
};

export default Browse;