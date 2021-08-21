import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTodo } from '../../data/useTodo'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useRouter } from 'next/router';
import ShowTodoList from '../../components/ShowTodoList'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
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
    height: '40%',
  },
  paper: {
    marginTop: '1rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1.3rem',
    position: 'relative',
    height: '30%',
    overflow: 'auto'
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
    paddingTop: '1rem',
    paddingBottom: '0.5rem',
    width: '100%',
    paddingLeft: '1.2rem',
    paddingRight: '1rem',
    height: '10%',
  }
}));

export default function ShowTodo() {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query
  const { todo, loading, error } = useTodo(id);
  const [data, setData] = useState({});
  const [selectedTodo, setSelectedTodo] = useState({});

  useEffect(() => {
    setData(todo);
  }, [todo])
  console.log(todo);
  console.log(selectedTodo);

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {todo && todo.name + 'のリスト'}
      </Typography>
      <Card className={classes.descriptionCard} variant="outlined">
        <CardContent className={classes.cardContent}>
          {selectedTodo && selectedTodo.description}
        </CardContent>
      </Card>
      <Paper className={classes.paper}>
        { todo && <ShowTodoList todo={todo} showDescription={(childTodo) => setSelectedTodo(childTodo)}/> }
      </Paper>
    </>
  );
}