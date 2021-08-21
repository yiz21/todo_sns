import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTodo } from '../../data/useTodo'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useRouter } from 'next/router';
import ShowTodoList from '../../components/ShowTodoList'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  descriptionCard: {
    marginTop: '1rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1.3rem',
    position: 'relative',
    minHeight: '50%'
  },
  card: {
    marginTop: '1rem',
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
  },
  title: {
    marginTop: '1rem',
    marginBottom: '0.5rem',
    width: '100%',
    marginLeft: '1.2rem',
  }
}));

export default function ShowTodo() {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query
  const { todo, loading, error } = useTodo(id);
  console.log(todo);
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {todo && todo.name + 'のリスト'}
      </Typography>
      <Card className={classes.descriptionCard} variant="outlined">
        <CardContent className={classes.cardContent}>
          This is Now Showed Todo Description !!
        </CardContent>
      </Card>
      <Card className={classes.card} variant="outlined">
        <CardContent className={classes.cardContent}>
          { todo && <ShowTodoList todo={todo}/> }
        </CardContent>
      </Card>
    </>
  );
}