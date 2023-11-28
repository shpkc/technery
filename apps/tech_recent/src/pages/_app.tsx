import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";
import { DEFAULT_SEO } from "src/constants/seo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";

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
      <Component {...pageProps} />
      <Analytics mode={"production"} />;
    </QueryClientProvider>
  );
}
