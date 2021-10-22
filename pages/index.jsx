import React, { useState, useEffect, useContext } from 'react';
import { Navigation } from '../data/navigation';
import { Mode } from '../data/mode';
import { Todo } from '../data/todo';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useRouter } from 'next/router';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
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
  card: {
    marginTop: '5rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1.3rem',
    position: 'relative',
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
  itemIcon: {
    minWidth: '0px'
  },
  searchField: {
    width: '100%',
  },
  title: {
    paddingBottom: '0.5rem',
    paddingRight: '1rem',
    width: '100%',
    paddingLeft: '1.2rem',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  titleText: {
  },
  deleteModeButton: {
  },
  cardInput: {
    backgroundColor: 'inherit',
    border: 'none',
    outline: 'none',
    color: 'white',
    width: '100%',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '1rem'
  }
}));

export default function Index() {
  const nav = useContext(Navigation);
  const mode = useContext(Mode);
  const todo = useContext(Todo);
  const router = useRouter();
  const classes = useStyles();
  const[values, setValues] = useState({ visibleTodo: [], update: false });
  const { loading, loggedIn } = useUser();

  useEffect(() => {
    if (!loading && !loggedIn) router.push('/User');
    nav.changeNav(0);
    if (todo.current && values.searchWord) {
      setValues({ ...values, ['visibleTodo']: todo.current.filter(todo => todo.name.indexOf(values.searchWord) != -1) });
    }else{
      setValues({ ...values, ['visibleTodo']: todo.current });
    }
  }, [todo, values.searchWord]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const changeVisibleTodo = (id, value) => {
    let updateTodos = values["visibleTodo"];
    updateTodos = updateTodos.map(t => {
      if (t.id == id) {
        t.name = value
        return t;
      }
      return t;
    });
    setValues({ ...values, ['visibleTodo']: updateTodos });
  }

  const showTodoList = async (t) => {
    try {
      todo.updateTodo(t);
      router.push(`/todo/${t.id}`);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.root}>
      {todo.loading && <BackDrop enable={todo.loading}/>}
      {!todo.loading && values.visibleTodo && (
        <>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.cardContent}>
              <Input
                placeholder="検索"
                className={classes.searchField}
                variant="outlined"
                startAdornment={<SearchIcon />}
                onChange={handleChange('searchWord')}
                value={values.searchWord}
              />
            </CardContent>
          </Card>
          <div className={classes.title}>
            <div className={classes.titleText}>
              <Typography variant="h6" >
                  マイリスト
              </Typography>
            </div>
          </div>
          <Card className={classes.todoListCard} variant="outlined">
            <CardContent className={classes.cardContent}>
              <TodoList
                todos={todo.current}
                onClick={(t) => showTodoList(t)}
                onBlur={(t) => todo.updateTodo(t)}
                changeTodo={(id, value) => changeVisibleTodo(id, value)}
                doneTodo={(t) => {todo.doneTodo(t); setValues({ ...values, ['update']: !values.update });}}
                deleteTodo={(t) => todo.deleteTodo(t)}
                shareTodo={(t) => todo.shareTodo(t)}
                mode={mode.current}
              />
            </CardContent>
          </Card>
        </>
      )}
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
