import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// import { IconlyProvider } from "react-iconly";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1" />
        <meta name="theme-color" content="#eabfb9" />
        <link rel="icon" href="/images/diamond.ico" />

        {/* AOS Animation CSS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>

      {/* <IconlyProvider
        set="two-tone"
        primaryColor="white"
      > */}

      <Component {...pageProps} />

      {/* </IconlyProvider> */}
    </>
  );
}
export default MyApp;
