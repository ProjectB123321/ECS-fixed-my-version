import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import t from "../lib/t";

const Develop = dynamic(() => import("../components/develop"), { ssr: false });

const DevelopPage = props => {
  const { id } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Develop id={id} />;
}

export default DevelopPage;

export async function getServerSideProps(context) {
  try {
    const viewQuery = t.string(context.query?.View);
    const id = parseInt(viewQuery, 10) || 0;

    return {
      props: {
        id,
        title: 'Develop - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        id: 0,
        title: 'Develop - Eggs21',
      },
    };
  }
}
