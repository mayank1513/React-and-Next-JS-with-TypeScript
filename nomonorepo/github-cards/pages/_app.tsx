import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="github-logo.png" type="image/x-icon" />
      </Head>
        <Header />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
