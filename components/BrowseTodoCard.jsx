import React, {useState, useContext} from 'react';
import useSWR from "swr";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LikeButton from './LikeButton'
import { openTodoIine } from '../requests/api'
import { Snack } from '../data/snack';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  actionButton: {
    float: 'right'
  },
});

export default function BrowseTodoCard({ todo }) {
  const [localTodo, setLocalTodo] = useState(false);
  const classes = useStyles();
  const snack = useContext(Snack);

  const doIine = async () => {
    try {
      const res = await openTodoIine(todo.id);
      setLocalTodo(res)
    } catch (error) {
      snack.snackOn({ kind: 'error', message: 'エラーが発生しました' });
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
          {todo.name}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          {todo.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionButton}>
        <Button onClick={() => doIine() }>
          <LikeButton todo={localTodo ? localTodo : todo} />
        </Button>
        <Button size="small">詳細</Button>
      </CardActions>
    </Card>
  );
}