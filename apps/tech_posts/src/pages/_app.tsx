import type { AppProps } from "next/app";
import "../styles/globals.css";

// declare module "react" {
//   interface Attributes {
//     css?: CSSProp;
//   }
// }

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
