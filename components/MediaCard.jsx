import React, { useContext } from 'react';
import { Todo } from '../data/todo';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function MediaControlCard({openTodo}) {
  const todo = useContext(Todo);

  return (
    <Card sx={{ display: 'flex', height:'170px', borderBottom: 1 }} id={`${openTodo.id}`}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {openTodo.name}
          </Typography>
        </CardContent>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', alignItems: 'center'}} sx={{ width: '100%'}}>
          <CardActions sx={{ width: '100%'}}>
            <Button size="medium" sx={{ height: 50, width: '50%' }}>詳細</Button>
            <Button
              size="medium"
              sx={{ height: 50, width: '50%' }}
              onClick={() => todo.importTodo(openTodo)}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <span>マイリスト</span>
                <span>に追加</span>
              </Box>
            </Button>
          </CardActions>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '40%' }}
        image="/open_todo_img.jpeg"
        alt="Live from space album cover"
      />
    </Card>
  );
}