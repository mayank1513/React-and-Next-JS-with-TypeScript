import type { AppProps } from "next/app";
import { css } from "linaria";

export const globals = css`
:global() { 
  * {
    box-sizing: border-box;
  }
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #1e1e1e;
    text-shadow: 1px 1px 1px gray;
  }
  body {
    background: url("/bg.png");
  }
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
