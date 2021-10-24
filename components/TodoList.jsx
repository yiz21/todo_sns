import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListMenu from '../components/ListMenu';
import { Todo } from '../data/todo';
import { useRouter } from 'next/router';
import { Mode } from '../data/mode';

const useStyles = makeStyles((theme) => ({
  cardInput: {
    backgroundColor: 'inherit',
    border: 'none',
    outline: 'none',
    color: 'white',
    width: '100%',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: '1rem'
  },
  checkBox: {
    padding: 0,
  },
  listItem: {
    height: '3rem'
  }
}));

export default function  TodoList() {
  const [selected, setSelected] = useState({});
  const classes = useStyles();
  const todo = useContext(Todo);
  const router = useRouter();
  const mode = useContext(Mode);

  const showTodoList = async (t) => {
    try {
      todo.updateTodo(t);
      router.push(`/todo/${t.id}`);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <List component="nav" disablePadding dense>
      {!todo.loading && (
        todo.current.map((t) => {
          const labelId = `checkbox-list-label-${t.id}`;
          return (
            <div key={t.id}>
              {
                (mode.current == 'normal' || mode.current == 'create') &&
                <ListItem
                  key={t.id}
                  selected={t == selected}
                  disablePadding
                  className={classes.listItem}
                  secondaryAction={
                    <ListMenu
                      handleDelete={() => {todo.deleteTodo(t)}}
                      handleShare={() => {todo.shareTodo(t)}}
                    />
                  }
                >
                  <ListItemButton
                    className={classes.checkBox}
                    onClick={() => {showTodoList(t); setSelected(t);}}
                    divider={todo.current.slice(-1)[0] != t}
                  >
                    <ListItemText id={labelId} primary={t.name} />
                  </ListItemButton>
                </ListItem>
              }
              {
                mode.current == 'edit' &&
                <ListItem
                  key={t.id}
                  selected={t == selected}
                  onClick={() => {setSelected(t);}}
                  disablePadding
                  className={classes.listItem}
                >
                  <ListItemButton
                    className={classes.checkBox}
                    divider={todo.current.slice(-1)[0] != t}
                  >
                    <input
                      type="text"
                      value={t.name}
                      className={classes.cardInput}
                      onChange={(e) => todo.updateLocalTodo({...t, name: e.target.value})}
                      onBlur={() => todo.updateTodo(t)}
                    />
                  </ListItemButton>
                </ListItem>
              }
            </div>
          ) 
        })
      )}
    </List>
  );
}