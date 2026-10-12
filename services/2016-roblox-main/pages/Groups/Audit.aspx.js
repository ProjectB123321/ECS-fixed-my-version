import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Sunucu tarafında (SSR) hata vermemesi için istemci bileşenlerini dinamik olarak yüklüyoruz
const Chat = dynamic(() => import("../components/chat"), { ssr: false });

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sayfadan gelen title prop'unu alıyoruz, yoksa varsayılan başlığı kullanıyoruz
  const pageTitle = pageProps?.title || 'Eggs21';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Ana Sayfa Bileşeni */}
      <Component {...pageProps} />

      {/* Yalnızca istemci (client) tarafında render edilen global bileşenler */}
      {mounted && <Chat />}
    </>
  );
}

export default MyApp;
