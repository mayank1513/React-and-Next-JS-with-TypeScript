import type { AppProps } from "next/app";
import { css } from "linaria";
import Head from "next/head";

export const globals = css`
  :global() {
    * {
      box-sizing: border-box;
      transition: 0.5s all;
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
      margin: 30px 15px;
      color: #2c3e50;
      text-align: justify;
      line-height: 1.5;
      h1,
      h3 {
        text-transform: uppercase;
        font-weight: 700;
        color: #80422f;
        margin: auto;
      }
      h3 {
        font-weight: 500;
      }
      ul {
        margin: 0;
      }
      li {
        margin: 8px 0;
      }
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
    .tech {
      padding: 5px;
      margin: 3px;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
      color: #fff;
      background-color: #17a2b8;
    }
    @media print {
      .calendly-badge-widget {
        position: absolute !important;
      }
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mayank Kumar Chaudhari</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
