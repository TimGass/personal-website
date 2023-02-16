import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-US" className="no-touch">
      <head>
        <title>Timothy Gass</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TimGass.png" />
        <Head />
      </head>
      <body>
        <noscript>This application requires javascript to run.</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}