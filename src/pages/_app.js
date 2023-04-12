import '@/styles/globals.css'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
