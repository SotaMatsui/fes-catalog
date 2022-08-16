import '../styles/globals.scss'
import Head from "next/head";
import { useEffect } from 'react';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    let element = document.getElementById('master_body');

    element.dataset.currentUrl = router.asPath;
  }, [router.asPath]);
  return getLayout(<>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
      <title>本所祭22</title>
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
