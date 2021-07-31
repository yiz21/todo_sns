import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import { signUp } from '../requests/api';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorDiv: {
    marginTop: '1rem',
  },
  errorLabel: {
    fontSize: '0.8rem',
    color: 'red'
  }
}));

const Signup = ({ pushSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const classes = useStyles();
  const router = useRouter();

  const handleSignUpButton = async (e) => {
    e.preventDefault();
    if (!email || !password || !passwordConfirmation) {
      setErrorMessage('必須項目を入力してください');
      return;
    }

    if (password != passwordConfirmation) {
      setErrorMessage('パスワードが一致しません');
      return;
    }
    try {
      const res = await signUp({ email: email, password: password });
    } catch (error) {
      console.log('=========');
      console.log('error');
      console.log(error);
      return;
    }
    router.reload();
  }

  const passwordChangeHandler = (val) => {
    setErrorMessage('');
    setPassword(val);
  }

  const passwordConfirmationChangeHandler = (val) => {
    setErrorMessage('');
    setPasswordConfirmation(val);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          アカウント登録
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => passwordChangeHandler(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="パスワードの確認"
            type="password"
            id="passwordConfirm"
            autoComplete="current-password"
            value={passwordConfirmation}
            onChange={(e) => passwordConfirmationChangeHandler(e.target.value)}
          />
          <Link onClick={() => pushSignIn()} variant="body2">
            ログインはこちら
          </Link>
          <div className={classes.errorDiv}>
            {errorMessage && (<span className={classes.errorLabel}>{errorMessage}</span>)}
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignUpButton}
          >
            登録する
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Signup;