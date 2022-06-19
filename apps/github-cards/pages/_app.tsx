import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Head from "next/head";
import { NextJSCourseLayout } from "ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="github-logo.png" type="image/x-icon" />
      </Head>
      <NextJSCourseLayout title="GitHub Cards App">
        <Component {...pageProps} />
      </NextJSCourseLayout>
    </>
  );
}

export default MyApp;
