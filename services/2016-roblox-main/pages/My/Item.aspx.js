import dynamic from "next/dynamic";
import React from "react";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const ConfigureItem = dynamic(() => import("../../components/configureItem"), { ssr: false });

const MyItemPage = props => {
  const { assetId } = props;

  return <ConfigureItem assetId={assetId} />;
}

export default MyItemPage;

export async function getServerSideProps(context) {
  try {
    const rawId = context.query?.id || null;
    const assetId = parseInt(rawId, 10) || 0;

    return {
      props: {
        assetId,
        title: 'Configure Item - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        assetId: 0,
        title: 'Configure Item - Eggs21',
      },
    };
  }
}
