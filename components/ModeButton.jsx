import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';

const useStyles = makeStyles((theme) => ({
  fabutton: {
    '& > *': {
      margin: theme.spacing(1),
      bottom: '57px',
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
          <Fab size="small" color="primary" aria-label="add" onClick={() => onClick('edit')}>
            <FlipCameraAndroidIcon />
          </Fab>
        )
      }
      {
        mode == 'edit' &&
        (
          <Fab size="small" color="primary" aria-label="add" onClick={() => onClick('delete')}>
            <FlipCameraAndroidIcon />
          </Fab>
        )
      }
      {
        mode == 'delete' &&
        (
          <Fab size="small" color="primary" aria-label="add" onClick={() => onClick('normal')}>
            <FlipCameraAndroidIcon />
          </Fab>
        )
      }
    </div>
  );
}
