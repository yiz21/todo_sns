import { useEffect, useContext } from 'react';
import usePost from '../data/usePost'
import { Navigation } from '../data/navigation';

const Index = () => {
  const { posts, error } = usePost();
  const nav = useContext(Navigation);

  useEffect(() => {
    nav.changeNav(0);
  }, []);

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