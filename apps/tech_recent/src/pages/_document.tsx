import Document, { Head, Html, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <body>
            <Main />
            <NextScript />
            <Analytics />
          </body>
        </Head>
      </Html>
    );
  }
}
