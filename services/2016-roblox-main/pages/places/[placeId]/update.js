import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const UpdatePlace = dynamic(() => import("../../../components/updatePlace"), { ssr: false });

const PlaceUpdatePage = props => {
  const { placeId } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !placeId) return null;

  return <UpdatePlace placeId={placeId} />;
}

export default PlaceUpdatePage;

export async function getServerSideProps(context) {
  try {
    const placeId = context.params?.placeId || context.query?.placeId || null;

    return {
      props: {
        placeId,
        title: 'Update Place - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        placeId: null,
        title: 'Update Place - Eggs21',
      },
    };
  }
}
