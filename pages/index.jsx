import React, { useEffect, useContext } from 'react';
import useTodos from '../data/useTodo'
import { Navigation } from '../data/navigation';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  card: {
    marginTop: '5rem',
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
  }
}));

export default function RecursiveTreeView() {
  const { todos, loading, error } = useTodos();
  const nav = useContext(Navigation);
  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    nav.changeNav(0);
  }, []);

  return (
    <div className={classes.root}>
      {loading && <div>loading</div>}
      {!loading && todos && (
        <Card className={classes.card} variant="outlined">
          <CardContent className={classes.cardContent}>
            <List component="nav" disablePadding dense>
              {
                todos.map((todo) => (
                  <>
                    <ListItem onClick={()=> router.push(`/todo/${todo.id}`)}>
                      <ListItemText primary={todo.name} />
                      <ListItemIcon edge="end" className={classes.itemIcon}>
                        <InboxIcon />
                      </ListItemIcon>
                    </ListItem>
                    {todos.slice(-1)[0] != todo && <Divider />}
                  </>
                ))
              }
            </List>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
