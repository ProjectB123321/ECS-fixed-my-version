import React, { useState, useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const pageTitle = pageProps?.title || 'Eggs21';

  if (!isMounted) {
    return null; // Sunucu tarafında çökmesini engeller
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
