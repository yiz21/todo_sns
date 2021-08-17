import '../styles/globals.css';
import SnackbarContext from '../data/snack';
import NavigationContext from '../data/navigation';
import Layout from "../components/Layout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarContext>
      <NavigationContext>
        <Layout title="todo sns">
          <Component {...pageProps} />
        </Layout>
      </NavigationContext>
    </SnackbarContext>
  )
}

export default MyApp
