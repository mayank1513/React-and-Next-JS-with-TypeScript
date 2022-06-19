import type { AppProps } from "next/app";
import Head from "next/head";
import { NextJSCourseLayout } from "ui";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React JS Crash Course: Todo List App</title>
      </Head>
      <NextJSCourseLayout title="React JS Crash Course: Todo List App">
        <Component {...pageProps} />
      </NextJSCourseLayout>
    </>
  );
}
