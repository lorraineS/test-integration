import React from 'react';

import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html
        lang="fr"
        className="antialiased font-base"
      >
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
