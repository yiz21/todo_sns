import React, { useState, useEffect, useContext } from 'react';
import { Navigation } from '../data/navigation';
import { Mode } from '../data/mode';
import { Todo } from '../data/todo';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BackDrop from '../components/BackDrop';
import ModeButton from '../components/ModeButton'
import CreateButton from '../components/CreateButton'
import SimpleModal from '../components/SimpleModal'
import SimpleForm from '../components/SimpleForm';
import TodoList from '../components/TodoList';
import ModeLabel from '../components/ModeLabel';
import useUser from '../data/useUser';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  todoListCard: {
    marginTop: '0',
    marginRight: '1rem',
    marginLeft: '1rem',
    position: 'relative',
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  title: {
    paddingTop: '3rem',
    paddingBottom: '0.5rem',
    paddingRight: '1rem',
    width: '100%',
    paddingLeft: '1.2rem',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));

export default function Index() {
  const nav = useContext(Navigation);
  const mode = useContext(Mode);
  const todo = useContext(Todo);
  const classes = useStyles();
  const { loading, loggedIn } = useUser();

  useEffect(() => {
    if (!loading && !loggedIn) router.push('/User');
    nav.changeNav(0);
  }, [todo]);

  return (
    <div className={classes.root}>
      {todo.loading && <BackDrop enable={todo.loading}/>}
      <>
        <div className={classes.title}>
          <Typography variant="h6" >
              マイリスト
          </Typography>
        </div>
        <Card className={classes.todoListCard} variant="outlined">
          <CardContent className={classes.cardContent}>
            <TodoList/>
          </CardContent>
        </Card>
      </>
      <CreateButton onClick={(m) => mode.changeMode(m)} mode={mode.current}/>
      <ModeButton onClick={(m) => mode.changeMode(m)} mode={mode.current}/>
      <SimpleModal
        open={mode.current == 'create'}
        handleClose={() => mode.changeMode('normal')}
        body={<SimpleForm placeholder={"リストを作成する"} handlePost={(post) => {todo.createTodo(post); mode.changeMode('normal')}}/>}
      />
      <ModeLabel/>
    </div>
  );
}
