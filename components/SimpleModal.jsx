import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    padding: '0.5rem',
    width: '70%',
    backgroundColor: theme.palette.background.secondary,
    border: '3px solid',
    borderRadius: '8px',
    borderColor: theme.palette.primary.main,
    transform: 'translate(-50%, -50%)',
  },
}));

export default function SimpleModal({open, handleClose, body}) {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        {body}
      </div>
    </Modal>
  );
}