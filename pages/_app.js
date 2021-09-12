import '../styles/globals.css';
import SnackbarContext from '../data/snack';
import NavigationContext from '../data/navigation';
import ModeContext from '../data/mode';
import TodoContext from '../data/todo';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarContext>
      <NavigationContext>
        <ModeContext>
          <TodoContext>
            <Layout title="todo sns">
              <Component {...pageProps} />
            </Layout>
          </TodoContext>
        </ModeContext>
      </NavigationContext>
    </SnackbarContext>
  )
}

export default MyApp
