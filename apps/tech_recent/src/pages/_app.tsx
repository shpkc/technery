import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";
import { DEFAULT_SEO } from "src/constants/seo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      {seoData ? <NextSeo {...seoData} /> : <NextSeo {...DEFAULT_SEO} />}
      <Component {...pageProps} />
      <Analytics mode={"production"} />;
    </QueryClientProvider>
  );
}
