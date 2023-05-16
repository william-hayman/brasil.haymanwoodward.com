import Layout from '@/components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}