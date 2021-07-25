import '../styles/globals.css'
import NavigationContext from '../data/navigation'

function MyApp({ Component, pageProps }) {
  return (
    <NavigationContext>
      <Component {...pageProps} />
    </NavigationContext>
  )
}

export default MyApp
