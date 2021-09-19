import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Mode } from '../../data/mode';
import { Todo } from '../../data/todo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import ModeButton from '../../components/ModeButton'
import SimpleModal from '../../components/SimpleModal'
import TitleDescriptionForm from '../../components/TitleDescriptionForm';
import TodoList from '../../components/TodoList'
import CreateButton from '../../components/CreateButton'
import ModeLabel from '../../components/ModeLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  descriptionCard: {
    marginRight: '1rem',
    marginLeft: '1.3rem',
    position: 'relative',
    height: '40%',
  },
  paper: {
    marginTop: '1rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1.3rem',
    position: 'relative',
    height: '30%',
    overflow: 'auto'
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  padding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    marginTop: '1rem',
    marginBottom: '0.2rem',
    width: '100%',
    height: '7%',
    textAlign: 'center'
  }
}));

export default function ShowTodo() {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const todo = useContext(Todo);
  const mode = useContext(Mode);
  const targets = todo.current?.filter(t => t.id == id);
  const _todo = targets && targets[0]
  const [data, setData] = useState({ visibleTodo: [],selectedTodo: {}, update: false });

  useEffect(() => {
    if(_todo && _todo.todos) {
      setData({ ...data, visibleTodo: _todo.todos, selectedTodo: _todo.todos[0] });
    }
  }, [todo]);

  const changeVisibleTodo = (id, value) => {
    let updateTodos = data.visibleTodo;
    updateTodos = updateTodos.map(t => {
      if (t.id == id) {
        t.name = value
        return t;
      }
      return t;
    });
    console.log(updateTodos);
    setData({ ...data, ['visibleTodo']: updateTodos });
  }

  const doneVisibleTodo = (target) => {
    let updateTodos = data.visibleTodo;
    updateTodos = updateTodos.map(t => {
      if (t.id == target.id) {
        t.is_done = !t.is_done
      }
      return t;
    });
    setData({ ...data, ['visibleTodo']: updateTodos });
    todo.doneTodo(target);
  }

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {_todo && _todo.name + 'のリスト'}
      </Typography>
      <Card className={classes.descriptionCard} variant="outlined">
        <CardContent className={classes.cardContent}>
          {data.selectedTodo && data.selectedTodo.description}
        </CardContent>
      </Card>
      <Paper className={classes.paper}>
        { _todo && 
          <TodoList
            todos={_todo.todos}
            onClick={(t) => setData({ ...data, ['selectedTodo']: t })}
            changeTodo={(id, value) => changeVisibleTodo(id, value)}
            doneTodo={(t) => doneVisibleTodo(t)}
            deleteTodo={(t) => todo.deleteTodo(t)}
            onBlur={(t) => todo.updateTodo(t)}
            mode={mode.current}
          />
        }
      </Paper>
      <CreateButton onClick={(m) => mode.changeMode(m)} mode={mode.current}/>
      <ModeButton onClick={(m) => mode.changeMode(m)} mode={mode.current}/>
      <SimpleModal
        open={mode.current == 'create'}
        handleClose={() => mode.changeMode('normal')}
        body={<TitleDescriptionForm handlePost={(post) => {todo.createTodo({...post, todo_id: id}); mode.changeMode('normal')}}/>}
      />
      <ModeLabel/>
    </>
  );
}