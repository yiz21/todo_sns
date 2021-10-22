import React, { useEffect, useContext } from 'react';
import useOpenTodo from '../data/useOpenTodo';
import BrowseTodoCard from '../components/BrowseTodoCard';
import { Navigation } from '../data/navigation';
import BackDrop from '../components/BackDrop';
import useUser from '../data/useUser';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingBottom: '56px',
  },
});

const Browse = () => {
  const { openTodoLoading, openTodos } = useOpenTodo();
  const nav = useContext(Navigation);
  const { loading, loggedIn } = useUser();
  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    if (!loading && !loggedIn) router.push('/User');
    nav.changeNav(1);
  }, []);

  return (
    <div className={classes.root}>
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
