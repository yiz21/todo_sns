import React, { useEffect, useContext } from 'react';
import useOpenTodo from '../data/useOpenTodo';
import BrowseTodoCard from '../components/BrowseTodoCard';
import { Navigation } from '../data/navigation';
import BackDrop from '../components/BackDrop';

const Browse = () => {
  const { loading, openTodos } = useOpenTodo();
  const nav = useContext(Navigation);

  useEffect(() => {
    nav.changeNav(1);
  }, []);

  return (
    <div>
      {loading && <BackDrop enable={loading}/>}
      {!loading && openTodos && (
        openTodos.map((todo) => (
          <BrowseTodoCard key={todo.id} todo={todo}/>
        ))
      )}
    </div>

  );
};

export default Browse;
