import usePost from '../data/usePost'
const Index = () => {
  const { posts, error } = usePost();
  return (
    <div>
      {
        posts && 
        posts.map((post) => (
          <p key={post.id}>{post.name}</p>
        ))
      }
    </div>
  );
};

export default Index;