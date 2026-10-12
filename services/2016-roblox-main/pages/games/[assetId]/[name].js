import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const SharedAssetPage = dynamic(() => import("../../../components/sharedAssetPage"), { ssr: false });

const GamePage = props => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <SharedAssetPage idParamName='assetId' nameParamName='name' />;
}

export default GamePage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Game - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Game - Eggs21',
      },
    };
  }
}
