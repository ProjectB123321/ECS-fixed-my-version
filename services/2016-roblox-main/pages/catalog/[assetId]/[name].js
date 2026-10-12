import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const SharedAssetPage = dynamic(() => import("../../../components/sharedAssetPage"), { ssr: false });

const ItemPage = props => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <SharedAssetPage idParamName='assetId' nameParamName='name' />;
}

export default ItemPage;

export async function getServerSideProps(context) {
  try {
    return {
      props: {
        title: 'Catalog Item - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Catalog Item - Eggs21',
      },
    };
  }
}
