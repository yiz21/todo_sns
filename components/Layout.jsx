import Head from "next/head";
import BottomNav from "./BottomNav";
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../data/theme';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
}));

const Layout = ({ title, children }) => {
  const classes = useStyles();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  })
  return (
    <div className={classes.root}>
      <Head>
        <title> {title} </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          {children}
        <BottomNav/>
      </ThemeProvider>
    </div>
  );
};

export default Layout;