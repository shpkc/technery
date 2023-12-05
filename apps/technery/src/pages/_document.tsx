import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="google-site-verification"
            content="CCxguLQ6uvaSsl5XaSCtMwPMO4xEILk5PcC3WC75zNU"
          />
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
