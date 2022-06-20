import type { AppProps } from "next/app";
import { NextJSCourseLayout } from "ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextJSCourseLayout title="My Awesome Blog">
        <Component {...pageProps} />
      </NextJSCourseLayout>
    </>
  );
}

export default MyApp;
