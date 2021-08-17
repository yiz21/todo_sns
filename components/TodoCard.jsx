
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },


}));

export default function TodoCard({todo}) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <List component="nav" disablePadding aria-label="main mailbox folders">
        <ListItem onClick={()=> router.push(`/todo/${todo.id}`)}>
          <ListItemText primary="Inbox" />
          <ListItemIcon edge="end" className={classes.itemIcon}>
            <InboxIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}