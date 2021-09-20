import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const useStyles = makeStyles((theme) => ({
  cardInput: {
    backgroundColor: 'inherit',
    border: 'none',
    outline: 'none',
    color: 'white',
    width: '100%',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: '1rem'
  },
  checkBox: {
    padding: 0,
  },
  listItem: {
    height: '3rem'
  }
}));

export default function  TodoList({ todos, changeTodo, onClick, onBlur, doneTodo, deleteTodo, mode }) {
  const [selected, setSelected] = useState({});
  const classes = useStyles();

  return (
    <List component="nav" disablePadding dense>
    {
      todos && todos.map((t) => {
        const labelId = `checkbox-list-label-${t.id}`;
         return (
            <div key={t.id}>
            {
              (mode == 'normal' || mode == 'create') &&
              <ListItem
                key={t.id}
                selected={t == selected}
                disablePadding
                className={classes.listItem}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    checked={t.is_done}
                    tabIndex={-1}
                    inputProps={{ 'aria-labelledby': labelId }}
                    onClick={() => doneTodo(t)}
                  />
                }
              >
                <ListItemButton
                  className={classes.checkBox}
                  onClick={() => {onClick(t); setSelected(t);}}
                  divider={todos.slice(-1)[0] != t}
                >
                  <ListItemText id={labelId} primary={t.name} />
                </ListItemButton>
              </ListItem>
            }
            {
              mode == 'edit' &&
              <ListItem
                key={t.id}
                selected={t == selected}
                onClick={() => setSelected(t)}
                disablePadding
                className={classes.listItem}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    checked={t.is_done}
                    tabIndex={-1}
                    inputProps={{ 'aria-labelledby': labelId }}
                    onClick={() => doneTodo(t)}
                  />
                }
              >
                <ListItemButton
                  className={classes.checkBox}
                  divider={todos.slice(-1)[0] != t}
                >
                  <input
                    type="text"
                    value={t.name}
                    className={classes.cardInput}
                    onChange={(e) => changeTodo(t.id, e.target.value)}
                    onBlur={() => onBlur(t)}
                  />
                </ListItemButton>
              </ListItem>
            }
            {
              mode == 'delete' && 
              <ListItem
                selected={t == selected}
                onClick={() => setSelected(t)}
                disablePadding
                className={classes.listItem}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(t)}>
                    <DeleteForever color={'error'}/>
                  </IconButton>
                }
              >
                <ListItemButton
                  className={classes.checkBox}
                  divider={todos.slice(-1)[0] != t}
                >
                  <ListItemText id={labelId} primary={t.name} />
                </ListItemButton>
              </ListItem>
            }
          </div>
         ) 
      })
    }
  </List>
  );
}