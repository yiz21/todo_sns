import React, { useState, useEffect, useContext } from 'react';
import useTodos from '../data/useTodo'
import { Navigation } from '../data/navigation';
import { makeStyles } from '@material-ui/core/styles';
import TodoCard from '../components/TodoCard';

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView() {
  const classes = useStyles();
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
