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
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#f7f7f8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
