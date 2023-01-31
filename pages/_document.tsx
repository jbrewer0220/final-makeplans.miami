import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate The Moves"
          />
          <meta property="og:site_name" content="WhatsTheMove.AI" />
          <meta
            property="og:description"
            content="WhatsTheMove.AI"
          />
          <meta property="og:title" content="The Move" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="The Move Man" />
          <meta
            name="twitter:description"
            content="WhatsTheMove.AI"
          />
          <meta
            property="og:image"
            content="https://ibb.co/2k389pd"
          />
          <meta
            name="twitter:image"
            content="https://ibb.co/2k389pd"
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

export default MyDocument;
