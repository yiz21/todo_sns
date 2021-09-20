import React, { useEffect, useContext } from 'react';
import useOpenTodo from '../data/useOpenTodo';
import BrowseTodoCard from '../components/BrowseTodoCard';
import { Navigation } from '../data/navigation';
import BackDrop from '../components/BackDrop';
import useUser from '../data/useUser';
import { useRouter } from 'next/router';

const Browse = () => {
  const { openTodoLoading, openTodos } = useOpenTodo();
  const nav = useContext(Navigation);
  const { loading, loggedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !loggedIn) router.push('/User');
    nav.changeNav(1);
  }, []);

  return (
    <div>
      {openTodoLoading && <BackDrop enable={openTodoLoading}/>}
      {!openTodoLoading && openTodos && (
        openTodos.map((todo) => (
          <BrowseTodoCard key={todo.id} todo={todo}/>
        ))
      )}
    </div>

  );
};

export default Browse;
