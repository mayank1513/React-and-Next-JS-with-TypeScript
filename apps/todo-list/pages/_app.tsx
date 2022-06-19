import "ui/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React JS Crash Course: Todo List App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
