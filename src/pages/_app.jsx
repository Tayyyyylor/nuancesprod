import Footer from '@/components/layouts/footer/Footer'
import Header from '@/components/layouts/header/Header'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
