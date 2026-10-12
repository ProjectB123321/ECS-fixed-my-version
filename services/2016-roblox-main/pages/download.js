import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import getFlag from "../lib/getFlag";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const Download = dynamic(() => import("../components/download"), { ssr: false });

const DownloadPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (!getFlag('downloadPageEnabled', false)) return null;

  return <Download />;
}

export default DownloadPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Download - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Download - Eggs21',
      },
    };
  }
}
