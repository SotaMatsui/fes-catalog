import '../styles/globals.scss'
import Head from "next/head";
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
