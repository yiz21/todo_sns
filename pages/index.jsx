import React, { useState, useEffect, useContext } from 'react';
import useTodos from '../data/useTodo'
import { Navigation } from '../data/navigation';
import TodoCard from '../components/TodoCard';

export default function RecursiveTreeView() {
  const { todos, loading, error } = useTodos();
  const nav = useContext(Navigation);

  useEffect(() => {
    nav.changeNav(0);
  }, []);

  return (
    <>
      {loading && <div>loading</div>}
      {!loading && todos && (
        todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo}/>
        ))
      )}
    </>
  );
}
