import '../styles/globals.css';
import SnackbarContext from '../data/snack';
import NavigationContext from '../data/navigation';
import ModeContext from '../data/mode';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarContext>
      <NavigationContext>
        <ModeContext>
          <Layout title="todo sns">
            <Component {...pageProps} />
          </Layout>
        </ModeContext>
      </NavigationContext>
    </SnackbarContext>
  )
}

export default MyApp
