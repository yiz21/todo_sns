import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fabutton: {
    '& > *': {
      margin: theme.spacing(1),
      bottom: '105px',
      right: '10px',
      position: 'fixed',
      zIndex: 1360
    },
  },
}));

export default function CreateButton({mode, onClick}) {
  const classes = useStyles();

  return (
    <div className={classes.fabutton}>
      {
        mode != 'create' &&
        <Fab size="small" color="primary" aria-label="add" onClick={() => onClick('create')}>
          <AddIcon />
        </Fab>
      }
    </div>
  );
}
