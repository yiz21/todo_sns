import React, { useState, createContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Snack = createContext({
  snackOn: () => {},
});

const SnackbarContext = ({ children }) => {
  const [state, setState] = React.useState({
    snack: false,
    kind: 'success',
    message: '',
  });
  const classes = useStyles();

  const snackOn = (props) => {
    setState({ snack: true, ...props});
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ snack: false});
  };

  return (
    <Snack.Provider value={{
      snackOn: (...props) => snackOn(...props),
    }}>
      <Snackbar
        open={state.snack}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={state.kind}>
          {state.message}
        </Alert>
      </Snackbar>
      {children}
    </Snack.Provider>
  )
}

export default SnackbarContext;