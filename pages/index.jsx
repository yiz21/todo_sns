import React, { useState, useEffect, useContext } from 'react';
import useTodos from '../data/useTodo'
import { Navigation } from '../data/navigation';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import { useRouter } from 'next/router';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import BackDrop from '../components/BackDrop';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { updateTodo } from '../requests/api';
import { Snack } from '../data/snack';

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
    marginTop: '1rem',
    marginBottom: '0.5rem',
    width: '100%',
    marginLeft: '1.2rem',
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
  const { todos, loading, error } = useTodos();
  const nav = useContext(Navigation);
  const router = useRouter();
  const classes = useStyles();
  const snack = useContext(Snack);

  const[values, setValues] = useState({});

  useEffect(() => {
    nav.changeNav(0);
    if (todos && values.searchWord) {
      setValues({ ...values, ['visibleTodo']: todos.filter(todo => todo.name.indexOf(values.searchWord) != -1) });
    }else{
      setValues({ ...values, ['visibleTodo']: todos });
    }
  }, [todos, values.searchWord]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const changeVisibleTodo = (id, value) => {
    let updateTodos = values["visibleTodo"];
    updateTodos = updateTodos.map(todo => {
      if (todo.id == id) {
        todo.name = value
        return todo;
      }
      return todo;
    });
    setValues({ ...values, ['visibleTodo']: updateTodos });
  }

  const changeTodo = async (id) => {
    const target = todos.filter(todo => todo.id == id);
    try {
      const res = await updateTodo({id, todo: target[0]});
    } catch (error) {
      snack.snackOn({ kind: 'error', message: '更新でエラーが発生しました' });
    }
  }

  const showTodoList = async (id) => {
    try {
      changeTodo(id);
      router.push(`/todo/${id}`);
    } catch (error) {
    }
  }

  return (
    <div className={classes.root}>
      {loading && <BackDrop enable={loading}/>}
      {!loading && values.visibleTodo && (
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
          <Typography variant="h6" className={classes.title}>
              マイリスト
          </Typography>
          <Card className={classes.todoListCard} variant="outlined">
            <CardContent className={classes.cardContent}>
              <List component="nav" disablePadding dense>
                {
                  values.visibleTodo.map((todo) => (
                    <div key={todo.id}>
                      <ListItem>
                        <input
                          type="text"
                          value={todo.name}
                          className={classes.cardInput}
                          onChange={(e) => changeVisibleTodo(todo.id, e.target.value)}
                          onBlur={(e) => changeTodo(todo.id)}
                        />
                        <ListItemSecondaryAction onClick={() => showTodoList(todo.id)}>
                          <IconButton edge="end" aria-label="comments">
                            <InboxIcon/>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      {values.visibleTodo.slice(-1)[0] != todo && <Divider />}
                    </div>
                  ))
                }
              </List>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
