import type { AppProps } from "next/app";
import "../styles/globals.css";
import { NextSeo } from "next-seo";
import { DEFAULT_SEO } from "src/constants/seo";

export default function App({ Component, pageProps }: AppProps) {
  const { seoData } = pageProps;

  return (
    <>
      {seoData ? <NextSeo {...seoData} /> : <NextSeo {...DEFAULT_SEO} />}
      <Component {...pageProps} />
    </>
  );
}
