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
  setSnackMessage: () => {},
  snackOn: () => {},
});

const SnackbarContext = ({ children }) => {
  const [snack, changeSnack] = useState(false);
  const [kind, setKind] = useState('success');
  const [message, changeMessage] = useState('');
  const classes = useStyles();

  const snackOn = (kind) => {
    if (kind) {
      setKind(kind);
    }
    changeSnack(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    changeSnack(false, () => {
      setKind('success');
    });
  };

  return (
    <Snack.Provider value={{
      setSnackMessage: (message) => changeMessage(message),
      snackOn: (kind) => snackOn(kind),
    }}>
      <Snackbar open={snack} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={kind}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </Snack.Provider>
  )
}

export default SnackbarContext;