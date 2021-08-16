import '../styles/globals.css';
import SnackbarContext from '../data/snack';
import NavigationContext from '../data/navigation';
import Layout from "../components/Layout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout title="todo sns">
      <SnackbarContext>
        <NavigationContext>
          <Component {...pageProps} />
        </NavigationContext>
      </SnackbarContext>
    </Layout>
  )
}

export default MyApp
