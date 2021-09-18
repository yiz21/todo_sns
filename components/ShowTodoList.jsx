import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    marginTop: '5rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1.3rem',
    position: 'relative',
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
  }
}));

export default function  ShowTodoList({ todo, showDescription, selected }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.padding}>
      {todo && todo.todos.map((childTodo) => {
        const labelId = `checkbox-list-label-${childTodo.id}`;

        return (
          <ListItem
            key={childTodo.id}
            role={undefined}
            dense
            button
            onClick={() => showDescription(childTodo)}
            selected={childTodo == selected}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(childTodo.id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={childTodo.name} />
            <ListItemSecondaryAction onClick={handleToggle(childTodo.id)}>
              <IconButton edge="end" aria-label="comments">
                <PlaylistAddCheck />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}