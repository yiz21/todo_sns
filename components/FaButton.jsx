import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fabutton: {
    '& > *': {
      margin: theme.spacing(1),
      bottom: '100px',
      right: '30px',
      position: 'fixed',
      zIndex: 1360
    },
  },
}));

export default function FaButton({onClick}) {
  const classes = useStyles();

  return (
    <div className={classes.fabutton}>
      <Fab color="primary" aria-label="add" onClick={() => onClick()}>
        <AddIcon />
      </Fab>
    </div>
  );
}