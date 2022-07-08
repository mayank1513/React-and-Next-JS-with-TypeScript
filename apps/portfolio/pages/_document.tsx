import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          {/* <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div className="calendly">
            <link
              href="https://assets.calendly.com/assets/external/widget.css"
              rel="stylesheet"
            />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="https://assets.calendly.com/assets/external/widget.js" />
            <script
              id="test"
              dangerouslySetInnerHTML={{
                __html: `
                Calendly.initBadgeWidget( {
                    url: 'https://calendly.com/mayank-upwork/meeting-with-mayank',
                    text: 'Schedule time with me',
                    color: '#00a2ff',
                    textColor: '#ffffff',
                    branding: true
                } );
              `,
              }}
            />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
