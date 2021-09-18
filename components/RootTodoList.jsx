import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';

const useStyles = makeStyles((theme) => ({
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

export default function  RootTodoList({ todos, changeTodo, onClick, onBlur, doneTodo, deleteTodo, mode }) {
  const [selected, setSelected] = useState({});
  const classes = useStyles();

  return (
    <List component="nav" disablePadding dense>
    {
      todos.map((t) => {
        const labelId = `checkbox-list-label-${t.id}`;
         return (
            <div key={t.id}>
            {
              mode == 'normal' &&
              <ListItem
                key={t.id}
                dense
                button
                onClick={() => {onClick(t); setSelected(t);}}
                selected={t == selected}
              >
                <Checkbox
                  edge="start"
                  checked={t.is_done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
                <ListItemText id={labelId} primary={t.name} />
                <ListItemSecondaryAction onClick={() => doneTodo(t)}>
                  <IconButton edge="end" aria-label="comments">
                    <PlaylistAddCheck />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            }
            {
              mode == 'edit' &&
              <ListItem
                key={t.id}
                dense
                button
                selected={t == selected}
                onClick={() => setSelected(t)}
              >
                <input
                  type="text"
                  value={t.name}
                  className={classes.cardInput}
                  onChange={(e) => changeTodo(t.id, e.target.value)}
                  onBlur={() => onBlur(t)}
                />
              </ListItem>
            }
            {
              mode == 'delete' && 
              <ListItem
                key={t.id}
                dense
                button
                selected={t == selected}
                onClick={() => setSelected(t)}
              >
                <ListItemText id={labelId} primary={t.name} />
                <ListItemSecondaryAction onClick={() => deleteTodo(t)}>
                  <IconButton edge="end" aria-label="comments">
                    <DeleteForever color={'error'}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            }
            {todos.slice(-1)[0] != t && <Divider />}
          </div>
         ) 
      })
    }
  </List>
  );
}