import Head from "next/head";
import BottomNav from "./BottomNav";
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from "react";

const Layout = ({ title, children }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  })
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      {children}
      <BottomNav/>
    </>
  );
};

export default Layout;