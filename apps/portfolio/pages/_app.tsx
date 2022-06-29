import type { AppProps } from "next/app";
import { css } from "linaria";

export const globals = css`
  :global() {
    * {
      box-sizing: border-box;
    }
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      color: #1e1e1e;
    }
    body {
      background: url("/bg.png");
    }
    section {
      background: #fffb;
      border-radius: 10px;
      padding: 15px;
      margin: 15px;
      color: #2c3e50;
      text-align: justify;
      line-height: 1.5;
      h1 {
        text-transform: uppercase;
        font-weight: 700;
        color: #80422f;
        margin: auto;
      }
      hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top-color: currentcolor;
        border-top-style: none;
        border-top-width: 0px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
