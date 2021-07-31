import '../styles/globals.css'
import NavigationContext from '../data/navigation'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationContext>
      <Layout title="todo sns">
        <Component {...pageProps} />
      </Layout>
    </NavigationContext>
  )
}

export default MyApp
