import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CreateIcon from '@material-ui/icons/Create';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const useStyles = makeStyles((theme) => ({
  fabutton: {
    '& > *': {
      margin: theme.spacing(1),
      bottom: '2rem',
      right: '10px',
      position: 'fixed',
      zIndex: 1360
    },
  },
}));

export default function FaButton({mode, onClick}) {
  const classes = useStyles();

  return (
    <div className={classes.fabutton}>
      {
        mode == 'normal' &&
        (
          <Fab color="primary" aria-label="add" onClick={() => onClick('edit')}>
            <EditIcon />
          </Fab>
        )
      }
      {
        mode == 'edit' &&
        (
          <Fab color="primary" aria-label="add" onClick={() => onClick('delete')}>
            <DeleteIcon />
          </Fab>
        )
      }
      {
        mode == 'delete' &&
        (
          <Fab color="primary" aria-label="add" onClick={() => onClick('normal')}>
            <AssignmentTurnedInIcon />
          </Fab>
        )
      }
    </div>
  );
}
