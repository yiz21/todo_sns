import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  likeButtonPushed: {
    backgroundColor: 'rgb(231, 76, 60)',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '0.4rem',
    cursor: 'pointer',
    borderWidth: '3px',
    borderStyle: 'solid',
  },
  likeButtonUnpushed: {
    backgroundColor: 'rgb(240, 240, 240)',
    color: 'gray',
    padding: '0.5rem',
    borderRadius: '0.4rem',
    cursor: 'pointer',
    transition: 'all  0.3s ease',
  }
});

export default function LikeButton({ todo }) {
  const classes = useStyles();
  return (
    <span className={ todo.is_already_iine ? classes.likeButtonPushed : classes.likeButtonUnpushed }>
      ♥ { todo.iine_amount }
    </span>
  );
}