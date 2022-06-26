import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Banner from "../components/Banner";
import styles from "../styles/Layout.module.css";
import TabBar from "../components/TabBar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Taipei Metro App - Demo</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#f7f7f8" />
      </Head>
      <Banner />
      <div className={styles.page}>
        <Component {...pageProps} />
      </div>
      <TabBar />
    </>
  );
}