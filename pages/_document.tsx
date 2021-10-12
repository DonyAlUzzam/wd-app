import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    // const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;

    return (
      <Html lang="en" className="light">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" />
        </Head>

        {/* <body className={ pageProps.isDark ? 'dark-mode' : 'light-mode' }> */}
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
