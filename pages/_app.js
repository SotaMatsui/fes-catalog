import '../styles/globals.scss'
import Head from "next/head";
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    let element = document.getElementById('master_body');

    element.dataset.currentUrl = router.asPath;
  }, [router.asPath]);
  return getLayout(<>
    <Head>
      <meta name="robots" content="noindex" />
      <title>本所祭22</title>
      <head prefix="og:http://ogp.me/ns#" />
      <meta property="og:url" content="https://honjo.one/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="本所祭22" />
      <meta property="og:description" content="彩れ、青春の一ページ。 - 2022年度本所高校文化祭デジタルパンフレット" />
      <meta property="og:site_name" content="本所祭22" />
      <meta property="og:image" content="https://honjo.one/ogp.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=090421" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=090421" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=090421" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <AnimatePresence>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  </>
  );
}

export default MyApp
