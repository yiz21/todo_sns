import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTodo } from '../../data/useTodo'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useRouter } from 'next/router';
import ShowTodoList from '../../components/ShowTodoList'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import ModeButton from '../../components/ModeButton'
import SimpleModal from '../../components/SimpleModal'
import { updateTodo, deleteTodo, postTodo } from '../../requests/api';
import TitleDescriptionForm from '../../components/TitleDescriptionForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  descriptionCard: {
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
    marginTop: '1rem',
    marginBottom: '0.2rem',
    width: '100%',
    height: '7%',
    textAlign: 'center'
  }
}));

export default function ShowTodo() {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query
  const { todo, loading, error, mutate } = useTodo(id);
  const [data, setData] = useState({});
  const [mode, setMode] = useState({ createMode: false });
  const [selectedTodo, setSelectedTodo] = useState({});

  useEffect(() => {
    setData(todo);
    if(todo && todo.todos) {
      setSelectedTodo(todo.todos[0])
    }
  }, [todo]);

  const setCreateMode = (state) => {
    setMode({ ...data, createMode: state });
  };

  const createTodo = async (todo) => {
    try {
      const res = await postTodo({todo: {...todo, todo_id: id} });
    } catch (error) {
      snack.snackOn({ kind: 'error', message: '更新でエラーが発生しました' });
    }
  }


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
        { todo && 
          <ShowTodoList 
            todo={todo} 
            showDescription={(childTodo) => setSelectedTodo(childTodo)}
            selected={selectedTodo}
          />
        }
      </Paper>
      <ModeButton onClick={() => setCreateMode(true)}/>
      <SimpleModal
        open={mode.createMode}
        handleClose={() => setCreateMode(false)}
        body={<TitleDescriptionForm handlePost={(post) => {createTodo(post); setCreateMode(false); mutate();}}/>}
      />
    </>
  );
}