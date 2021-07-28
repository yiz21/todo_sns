import usePost from '../data/usePost'
const Home = () => {
  const { posts, error } = usePost();
  console.log(posts)
  return (
    <div>
      Home
      {posts && posts.forEach((post) => (<p>{post.name}</p>))}
    </div>
  );
};

export default Home;