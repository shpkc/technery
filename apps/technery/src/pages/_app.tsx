import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";
import { DEFAULT_SEO } from "src/constants/seo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { SpeedInsights } from "@vercel/speed-insights/next";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const { seoData } = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GA_ID});
        `}
      </Script>
      {seoData ? <NextSeo {...seoData} /> : <NextSeo {...DEFAULT_SEO} />}
      <StyleSheetManager
        enableVendorPrefixes
        shouldForwardProp={(propName, elementToBeRendered) => {
          return typeof elementToBeRendered === "string"
            ? isPropValid(propName)
            : true;
        }}
      >
        <Component {...pageProps} />
        <SpeedInsights />
      </StyleSheetManager>
      <Analytics mode={"production"} />;
    </QueryClientProvider>
  );
}
